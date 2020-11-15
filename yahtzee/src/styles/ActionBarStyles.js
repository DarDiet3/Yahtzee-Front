import styled from "styled-components";
import { Die }from "./GameBoardStyles";

export const MainDiv = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
`
export const H2 = styled.h2`
    margin: 0;
`
export const TradePost = styled.div`
    height: 250px;
    width: 95%;
    border: solid lemonchiffon 1px;
    background: lemonchiffon;
    display: flex;
    flex-direction: column;
`
export const Bold = styled.span`
    margin: 0;
    font-weight: bold;
`
export const ResourceLabel = styled.div`
    height: 35px;
    width: 35px;
    backgroud: white;
    border: solid black 1px;
    border-radius: 6px;
    &.wheat {
        background: tan;
    }
    &.brick {
        background: red;
    }
    &.wood {
        background: brown;
    }
    &.rock {
        background: darkgray
    }
    &.sheep {
        background: white;
    }
    &.gold {
        background: gold;
    }
    & :checked {
        box-shadow: 0px 0px 8px 4px gold;
    }
`
export const ResourceForm = styled.form`

`

export const BuildCostCard = styled.div`
    height: 150px;
    width: 85%;
    background: blue;
`
export const BuildForm = styled.form`

`