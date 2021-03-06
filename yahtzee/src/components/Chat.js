import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { socket } from "../services/socketConnection";
import * as C from "../styles/ChatStyles";

import { currentUser } from "../features/gameMetaDataSlice";





const Chat = () => {
    const activeUser = useSelector(currentUser);
    const [chatData, setChatData] = useState({
        username: activeUser.username,
        message: ""
    })
    const [chatString, setChatString] = useState({
        messages: []
    })
    const [canChat, setCanChat] = useState(false)

    useEffect(() => {
        const socket = io("https://settlers-of-deere-dice.herokuapp.com");
        socket.on("RECEIVE_MESSAGE", (data) => {
            addMessage(data)
        })
    },[])

    const addMessage = (data) => {
        let copyMessage = chatString.messages;
        copyMessage.push(data)
        const newList ={messages: copyMessage}
        setChatString(newList)
    }

    const handleChange = (e) => {
        setChatData({...chatData, message: e.target.value})
    }

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit("SEND_MESSAGE", {
            author: chatData.username,
            message: chatData.message
        })
        setChatData({...chatData, message: ""})
    }

    const enterMessage = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessage(e)
        }
    }


    return(
        <C.ChatDiv>
            <C.Chats>
                <ul id="messages">
                    {chatString.messages.map((message, index) => {
                        return (
                            <li>{message.author}: {message.message}</li>
                        )
                    })}
                </ul>
            </C.Chats>
            <C.ChatForm>
                <C.CInput
                    id="m" 
                    autoComplete="off"
                    value={chatData.message}
                    onChange={(e) => {handleChange(e)}}
                    onKeyDown={(e) => enterMessage(e)}
                    type={"text"}
                    >{chatData.message}</C.CInput>
                    <C.ChatButton onClick={(e) => sendMessage(e)}>Send</C.ChatButton>
            </C.ChatForm>
        </C.ChatDiv>
    )
}

export default Chat;