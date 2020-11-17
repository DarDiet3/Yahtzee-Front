import styled from "styled-components";
import { theme } from "./GlobalTheme";

export const ChatDiv = styled.div`
    margin: 0; 
    padding: 0; 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 0 5px ${theme.light};
`

export const Chats = styled.div`
    box-sizing: border-box;
    height: 85%;
    width: 100%;
    flex: 1;
    background: ${theme.offWhite};
    font-family: ${theme.primaryFont};
    box-shadow: inset 0 0 5px ${theme.light};

    & #messages { 
        list-style-type: none; 
        margin: 5px; 
        padding: 0; 
        
    };
    & #messages li { 
        padding: 5px 10px; 
    };
    & #messages li:nth-child(odd) { background: #eee; };
`

export const ChatForm = styled.div`
    background: ${theme.primary};
    box-sizing: border-box;
    width: 100%;
    height: 10%;  
    padding: 8px; 
    justify-self: flex-end;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    
`

export const CInput = styled.textarea`
    border: 0; 
    padding: 10px; 
    width: 90%; 
    height: 35px;
    margin-right: 0.5%; 
    resize: none;
    box-shadow: inset 0 0 5px ${theme.light};
`

export const ChatButton = styled.button`
    width: 9%; 
    background: ${theme.highlight}; 
    color: ${theme.offWhite};
    border-radius: 4px;
    cursor: pointer;
    border: none; 
    padding: 10px;
    box-shadow: 0 0 5px ${theme.offWhite};
`

    