import styled from "styled-components";
import { Die }from "./GameBoardStyles";
import { theme, iconColor } from "./GlobalTheme";


export const Div = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    box-shadow: inset 0 0 3px ${theme.light};
    display: flex;
    flex-direction: column;
    font-family: ${theme.primaryFont};
`
export const MainDiv = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: solid ${theme.light} 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const H2 = styled.h2`
    font-family: ${theme.primaryFont};
    color: ${theme.offWhite}
    margin: 0;
    text-align: center;

`
export const TradePost = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: solid lemonchiffon 1px;
    background: lemonchiffon;
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const Bold = styled.span`
    margin: 0;
    font-weight: bold;
`
export const Label = styled(Die)`
    display: flex;
    &.selected {
        box-shadow: 0px 0px 8px 4px gold;
    }
`
export const ActButton = styled.button`
    font-family: ${theme.primaryFont};
    height: 30px;
    width: 45%;
    border: solid ${theme.light} 4px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: ${theme.offWhite};
    background: ${theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px ${theme.light};
    &: disabled {
        opacity: 0.7;
        background: ${theme.light};
    }
`

export const ResourceLabel = styled.div`
    height: 98%;
    width: 98%;
    backgroud: white;
    border: solid black 1px;
    border-radius: 2px;
    cursor: pointer;
    &.wheat {
        background: tan;
        background-image:url("images/icons/wheat.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.brick {
        background: salmon;
        background-image:url("images/icons/brick.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.wood {
        background: brown;
        background-image:url("images/icons/wood.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.rock {
        background: darkgray;
        background-image:url("images/icons/rock.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.sheep {
        background: white;
        background-image:url("images/icons/sheep.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.gold {
        background: gold;
        background-image:url("images/icons/gold.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
`
export const ResourceForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-itmes: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    & input {
            display: none;
        }
`
export const HiddenCheck = styled.input`
    display: none;
`
export const BuildCostCard = styled.div`
    height: 210px;
    width: 75%;
    margin: 5px;
    background: ${theme.highlight};
`
export const BuildLine = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 2px;
    height: 24%;
    width: 100%;
    border-bottom: solid 2px lightblue;
`
export const BuildSquare = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.wheat {
        background-image:url("images/icons/wheat.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.brick {
        background-image:url("images/icons/brick.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.wood {
        background-image:url("images/icons/wood.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.rock {
        background-image:url("images/icons/rock.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.sheep {
        background-image:url("images/icons/sheep.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &.title {
        background: navy;
    }
    &.road {
        color: ${iconColor.road}
    }
    &.knight {
        color: ${iconColor.knight}
    }
    &.settlement {
        color: ${iconColor.settlement}
    }
    &.city {
        color: ${iconColor.city}
    }
`
export const BuildForm = styled.form`
    padding: 10px;
    & p {
        margin: 0;
        margin-top: 5px;
        text-align: center;
    }
`