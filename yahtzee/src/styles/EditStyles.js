import styled from "styled-components";
import { theme, abutton, userForm } from "./GlobalTheme";

export const BodyContainer = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: ${theme.offWhite};
`
export const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-itmes: center;
    background: ${theme.offWhite};
    box-shadow: inset 0 0 5px ${theme.light};
`

export const BioBox = styled.div`
    width: 100%;
    height: 15%;
    box-sizing: border-box;
    display: flex;
    padding: 5px;
    font-family: ${theme.primaryFont};
    background: ${theme.highlight};
    align-items: center;
    justify-content: space-around;
    color: ${theme.offWhite};
    position: relative;
    & a {
        ${abutton}
        width: 75px;
        text-align: center;
    }
`
export const ProfPic = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50%;
`
export const SubBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
    background: ${theme.offWhite};
    position: relative;
    &:before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url("/images/fallFarm.jpg");
        background-size: cover;
        filter: grayscale(80%);
      };
      & h1 {
          color: ${theme.primary};
          text-align: center;
          border-bottom: solid 2px ${theme.light};
      }
`

export const FriendBox = styled.div`
    width: 95%;
    display: flex;
    flex-flow: column wrap;
    border: purple solid 1px;
`

export const StatsBox = styled.div`
    width: 60%;
    height: 90%;
    background: ${theme.offWhite};
    font-family: ${theme.primaryFont};
    box-shadow: inset 0 0 3px ${theme.light};
    border: solid 4px ${theme.secondary};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    z-index: 2;
    

    &.inner {
        height: 82%;
        width: 98%;
        border: none;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: none;

    }
    
`
export const StatLine = styled.div`
    width: 45%;
    min-height: 15%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    &.list {
        
    }
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
export const NavBar = styled.div`
    width: 99.9%;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    background: ${theme.light};
`
export const NavButton = styled.button`
    ${abutton}
`
export const Form = styled.form`
    ${userForm}
`
export const FormEnter = styled.input`
    font-family: ${theme.primaryFont};
    border: 2px solid ${theme.light};
    border-radius: 4px;
    background: ${theme.primary};
    cursor: pointer;
    color: ${theme.offWhite};
    height: 35px;
    width: 60%;
    &:hover {
        background: #419834;
    }
`
export const FormDelete = styled.button`
    font-family: ${theme.primaryFont};
    border: 2px solid ${theme.light};
    border-radius: 4px;
    cursor: pointer;
    color: ${theme.offWhite};
    height: 35px;
    width: 60%;
    &:hover {
        background: #419834;
    }
    background: ${theme.danger}
`