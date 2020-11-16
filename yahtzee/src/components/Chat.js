import React, { useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

import * as C from "../styles/ChatStyles";

import { currentUser } from "../features/gameMetaDataSlice";




const Chat = () => {
    const activeUser = useSelector(currentUser);
    console.log(activeUser)

    const [chatData, setChatData] = useState({
        username: activeUser.username,
        message: "",
        messages: []
    })

    const socket = useState(io("http://localhost:3001"))

    const handleChange = (e) => {
        setChatData({...chatData, message: e.target.value})
        console.log(chatData)
    }

    return(
        <C.ChatDiv>
            <ul id="messages">
                {chatData.messages.map((message, index) => {
                    return (
                        <li>{message.username}: {message.message}</li>
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
                    <C.ChatButton>Send</C.ChatButton>
            </C.ChatForm>
        </C.ChatDiv>
    )
}

export default Chat;