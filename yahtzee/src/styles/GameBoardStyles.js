import styled from "styled-components";



export const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90vh;
    background: #d5d5d5;
    align-items: center;
    justify-content: space-around;
    
`

export const Board = styled.div`
    padding: 25px;
    display: grid;
    min-width: 525px;
    min-height: 480px;
    width: 650px;
    height: 594px;
    grid-template-columns: repeat(21, minmax(0, 2.25%));
    grid-template-rows: repeat(33, minmax(0, 2.25%));
    gap: .875% 2.75%;
    background: lightblue;
    box-shadow: 0px 0px 5px navy;
    border-radius: 25px;
`
export const Table = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 98%;
    width: 55%;
    background: #2F3D41;
`

export const DiceHolder = styled.div`
    height: 85px;
    padding: 0 15px;
    display: flex;
    align-itmes: center;
    justify-content: space-between;
`

export const Die = styled.div`
    height: 70px;
    width: 70px;
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
`