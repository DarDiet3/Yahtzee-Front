import styled from "styled-components";
import { theme, abutton } from "./GlobalTheme";

export const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url("/images/fallFarm.jpg");
        background-size: cover;
        filter: grayscale(80%);
      };
`

export const Modal = styled.div`
    z-index: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40%;
    width: 40%;
    border: solid ${theme.light} 4px;
    border-radius: 4px;
    background: ${theme.offWhite};
    box-shadow: 0 0 3px ${theme.light};
    & a {
        ${abutton}
    }
    & h1 {
        color: ${theme.primary};
    }
`

export const Button = styled.div`
    ${abutton}
    
`