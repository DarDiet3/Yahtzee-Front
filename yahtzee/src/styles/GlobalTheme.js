import styled from "styled-components";

export const theme = {
    primary: "#367C2B",
    secondary: "#FFDE00",
    danger: "#C84630",
    light: "#555555",
    highlight: "#2D7DD2",
    offWhite: "#F5F5F5",
    primaryFont: '"Trebuchet MS", Helvetica, sans-serif',
    secondaryFont: "arial"
}

export const abutton = `
    font-family: ${theme.primaryFont};
    height: 50px;
    width: 75%;
    border: solid ${theme.light} 4px;
    border-radius: 4px;
    cursor: pointer;
    margin: 15px 0; 
    text-decoration: none;
    color: black;
    background: ${theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px ${theme.light};
    &:hover{
        background: #F3CC90;
    }
`

export const userForm = `
    display: flex;
    flex-direction: column;
    height: 75%;
    width: 75%;
    justify-content: space-around;
    align-items: center;

    & input {
        font-family: ${theme.primaryFont};
        border: 2px solid ${theme.light};
        border-radius: 4px;
        width: 60%;
        height: 25px;

    }
`