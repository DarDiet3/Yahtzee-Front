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

    useEffect(() => {
        const socket = io("http://localhost:3001");
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

    console.log(chatString.messages)

    return(
        <C.ChatDiv>
            <ul id="messages">
                {chatString.messages.map((message, index) => {
                    return (
                        <li>{message.author}: {message.message}</li>
                    )
                })}
            </ul>
            <C.ChatForm>
                <C.CInput
                    id="m" 
                    autoComplete="off"
                    value={chatData.message}
                    onChange={(e) => {handleChange(e)}}
                    />
                    <C.ChatButton onClick={(e) => sendMessage(e)}>Send</C.ChatButton>
            </C.ChatForm>
        </C.ChatDiv>
    )
}

export default Chat;