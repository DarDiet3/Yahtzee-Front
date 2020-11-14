import styled from "styled-components";

export const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40%;
    width: 40%;
    border: solid green 4px;
    border-radius: 4px;
    & a {
        height: 50px;
        width: 75%;
        border: solid black 4px;
        border-radius: 4px;
        cursor: pointer;
        margin: 15px 0; 
        text-decoration: none;
        color: black;
    }
`

export const Button = styled.div`
    height: 50px;
    width: 75%;
    border: solid black 4px;
    border-radius: 4px;
    cursor: pointer;
    margin: 15px 0;
    
`