import styled from "styled-components";
import { theme} from "./GlobalTheme";

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    padding: 4px;
    align-items: center;
    justify-content: space-around;
    box-shadow: inset 0 0 5px ${theme.light};
    position: relative;   
    background: ${theme.offWhite}; 
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

export const ModDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Board = styled.div`
    width: 60%;
    height: 90%;
    border: solid ${theme.primary} 3px;
    border-radius: 4px;
    box-shadow: 0 0 3px ${theme.light};
    background: rgba(245, 245, 245, .85);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    position: relative;
    z-index: 2;
    & h1 {
        text-align: center;
        color: ${theme.primary};
        margin: 0;
        opacity: 1;
        height: 60px;
        padding: 5px;
    }
`
export const MainHolder = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    box-shadow: inset 0 0 3px ${theme.light};
    border: solid 4px ${theme.secondary};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
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
`
export const NavButton = styled.div`
    height: 15px;
    width: 15%;
    padding: 10px;
    display: flex;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    // cursor: pointer;
    color: ${theme.light};
    font-family: arial;
    align-self: flex-end;
    border-right: solid 2px ${theme.light};
    border-top: solid 2px ${theme.light};
    border-radius: 4px;
    &: hover {
        background: rgba(0, 0, 0, .3)
    }
    &.selected {
        background: ${theme.primary};
        color:${theme.offWhite};
        border-radius: 4px 4px 0 0;
        border-top:none;
    }
`
export const TableRow = styled.div`
    height: 10%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 2px;
    box-sizing: border-box;
    border-bottom: solid ${theme.light} 2px;
    align-items: center;
    &.head {
        height: 25px;
    }
    & #ScoreRow :nth-child(odd) { background: #eee; };
`
export const TableName = styled.div`
    font-family: ${theme.primaryFont};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`
export const TableScore = styled.div`
    font-family: ${theme.primaryFont};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`
export const TableImage = styled.img`
    height: 100%;
    width: 40%;
    justify-self: center;
    border-radius: 50%;
`
export const LeaderBoard = styled.div`
    box-sizing: border-box;
    overflow: scroll;
    height: 100%;
    width: 100%;
`
