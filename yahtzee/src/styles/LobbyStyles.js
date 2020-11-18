import styled from "styled-components";
import {theme, abutton} from "./GlobalTheme";

export const BodyContainer = styled.div`
    width: calc(100vw - 20px);
    height: 85vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    background: ${theme.light};
`

export const MainHolder = styled.div`
    width: 60%;
    height: 100%;
    border: solid ${theme.secondary} 3px;
    border-radius: 4px;
    box-shadow: 0 0 3px ${theme.offWhite};
    display: flex;
    flex-direction: column;
    & a {
        width: 75%;
        height: 50px;
        width: 75%;
        border: solid black 4px;
        border-radius: 4px;
        cursor: pointer;
        margin: 15px 0;
    }
`
export const MainContent = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 5px ${theme.light};
    position: relative;
`
export const Waiting = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: inset 0 0 3px ${theme.light};
    &:before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url("/images/fallFarm.jpg");
        background-size: cover;
        filter: grayscale(80%);
      };
    & button {
        z-index: 1;
        ${abutton}
    }

`
export const AButton = styled.div`
    & a {
        ${abutton}
    }
`
export const NavButton = styled.div`
    height: 15px;
    padding: 10px;
    display: flex;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${theme.light};
    font-family: arial;
    align-self: flex-end;
    border-right: solid 2px ${theme.light};
    &: hover {
        background: rgba(0, 0, 0, .3)
    }
    &.selected {
        background: ${theme.primary};
        color:${theme.offWhite};
        border-radius: 4px 4px 0 0;
    }
    
    
`
export const NavBar = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space;
    background: ${theme.secondary};
    & a, a:visited {
        text-decoration: none;
        font-family: arial;
        color: ${theme.light};
        align-self: flex-end;
        border-right: solid 2px ${theme.light};
    }
    & .pdf {
        border: none;
        height: 15px;
        width: 95px;
        margin: 0;
        padding: 1px;
    }
`

export const ChatContainer = styled.div`
    width: 35%;
    height: 100%;
    border: solid ${theme.primary} 3px;
    border-radius: 4px;
    box-shadow: 0 0 3px ${theme.offWhite};
    background: ${theme.primary};
    display: flex;
    flex-direction: column;
    & h1 {
        text-align: center;
        color: ${theme.offWhite};
        margin: 0;
    }
`
