import styled from "styled-components";

export const ChatDiv = styled.div`
    margin: 0; 
    padding: 0; 
    box-sizing: 
    border-box;
    font: 13px Helvetica, Arial;
    &#messages { list-style-type: none; margin: 0; padding: 0; }
    &#messages li { padding: 5px 10px; }
    &#messages li:nth-child(odd) { background: #eee; }
`

export const ChatForm = styled.div`
    background: #000; 
    padding: 3px; 
    position: fixed; 
    bottom: 0; 
    width: 100%; 
`

export const CInput = styled.input`
    border: 0; 
    padding: 10px; 
    width: 90%; 
    margin-right: 0.5%; 
`

export const ChatButton = styled.button`
    width: 9%; 
    background: rgb(130, 224, 255); 
    border: none; 
    padding: 10px;
`

    