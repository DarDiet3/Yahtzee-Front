import styled from "styled-components";

export const Header = styled.header`
    height: 10vh;
    width: 100vw;
    margin: 0;
    background: #367C2B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NavButton = styled.div`
    margin: 0px 15px;
    width: 50px;
    height: 15px;
    padding: 10px;
    background: #555555;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px black;
    & a {
        text-decoration: none;
        font-family: arial;
        color: white;
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const H1 = styled.h1`
    font-family: arial;
    color: white;
    margin: 0;
`

export const BodyContainer = styled.div`
    width: 100vw;
    height: 85vh;
`