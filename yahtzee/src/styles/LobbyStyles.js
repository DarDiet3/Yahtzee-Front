import styled from "styled-components";


export const BodyContainer = styled.div`
    width: calc(100vw - 30px);
    height: 85vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`


export const OptionHolder = styled.div`
    width: 57%;
    height: 95%;
    border: solid black 1px;
    padding: 15px;
`

export const Selector = styled.div`
    width: 75%;
    height: 50px;
    width: 75%;
    border: solid black 4px;
    border-radius: 4px;
    cursor: pointer;
    margin: 15px 0;
`