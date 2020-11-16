import React from "react";

import * as C from "../styles/ChatStyles";


const Chat = () => {
    return(
        <C.ChatDiv>
            <ul id="messages"></ul>
            <C.ChatForm>
                <C.CInput id="m" autoComplete="off"/><C.ChatButton>Send</C.ChatButton>
            </C.ChatForm>
        </C.ChatDiv>
    )
}

export default Chat;