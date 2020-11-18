import styled from "styled-components";
import { theme } from "./GlobalTheme";

export const Header = styled.header`
    height: 8vh;
    width: calc(100vw - 10);
    margin: 0;
    background: ${theme.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
`
export const TitleHolder = styled.div`
    width: 30%;
    text-align: center;
`

export const NavButton = styled.div`
    height: 15px;
    padding: 10px;
    display: flex;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${theme.offWhite};
    font-family: arial;
    align-self: flex-end;
    &: hover {
        background: rgba(0, 0, 0, .3)
    }
    
    
`

export const NavBar = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    & a, a:visited {
        text-decoration: none;
        font-family: arial;
        color: ${theme.offWhite};
        align-self: flex-end;
        border-right: solid 2px ${theme.offWhite};
    }

`
export const H1 = styled.h1`
    font-family: ${theme.primaryFont};
    color: ${theme.offWhite}
    margin: 0;

    & a, a:visited {
        text-decoration: none;
        color: ${theme.offWhite}
    }
`


export const BodyContainer = styled.div`
    width: 100vw;
    height: 85vh;
`
export const Footer = styled.footer`
    height: 5vh;
    width: 100vw;
    margin: 0;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FootImg = styled.img`
    height: 4vh;
    width: 4vh;
`
export const FootDiv = styled.div`
    width: 30%;
    font-family: ${theme.primaryFont};
    display: flex;
    align-items: center;
    justify-content: space-around;
    & p {
        color: ${theme.offWhite};
    }
    &a, a:visited {
        color: ${theme.offWhite};
    }
    
`