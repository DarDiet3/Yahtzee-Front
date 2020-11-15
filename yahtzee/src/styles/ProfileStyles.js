import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-itmes: center;
    border: solid black 2px;
    background: blue;
`

export const SubBox = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-itmes: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    border: solid green 2px;
    background: white;
`
export const BioBox = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    border: yellow solid 1px;
    background: lemonchiffon;
    align-items: center;
`

export const ProfPic = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50%;
`
export const FriendBox = styled.div`
    width: 95%;
    display: flex;
    flex-flow: column wrap;
    border: purple solid 1px;
`

export const StatsBox = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: orange solid 1px;
`
export const StatLine = styled.div`
    width: 100%;
`

export const BodyContainer = styled.div`
    width: 100vw;
    height: 85vh;
    background: purple;
`