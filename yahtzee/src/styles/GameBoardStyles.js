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