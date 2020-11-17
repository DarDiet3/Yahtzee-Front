import styled from "styled-components";
import { theme, abutton } from "../styles/GlobalTheme";


export const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    padding: 4px;
    background-image: URL("/images/wooTable.jpg");
    background-size: cover;
    align-items: center;
    justify-content: space-around;
    box-shadow: inset 0 0 5px ${theme.light};
    position: relative;
    
    
`

export const Board = styled.div`
    padding: 15px;
    display: grid;
    width: 450px;
    height: 411px;
    grid-template-columns: repeat(13, minmax(0, 3.25%));
    grid-template-rows: repeat(21, minmax(0, 3.25%));
    gap: 1.27% 3.75%;
    background: #00B4D8;
    box-shadow: 0px 0px 5px navy;
    border-radius: 25px;
    align-items: center;
    justify-content: center;


    // Set Up Grid Rows

    & .city_1, .city_2, .knight_1, .knight_2{
        grid-row: 3;
    }

    & .road_2, .road_5, .hex_1, .hex_2, .joker_1, .joker_2{
        grid-row: 5;
    }

    & .road_0, .road_1, .road_3, .road_4, .road_6 {
        grid-row: 8;
    }

    & .set_1, .set_2, .set_3, .knight_3, .knight_6 {
        grid-row: 9;
    }

    & .road_7, .hex_3, .hex_6, .hex_7, .joker_3, .joker_6{
        grid-row: 11;
    }

    & .road_8, .road_9, .road_10, .road_11, .road_12 {
        grid-row: 14;
    }

    & .set_4, .set_5, .set_6, .knight_4, .knight_5 {
        grid-row: 15;
    }

    & .road_13, .hex_4, .hex_5,.joker_4, .joker_5{
        grid-row: 17;
    }

    & .road_14, .road_15, .road_16 {
        grid-row: 20;
    }
    & .city_3, .city_4 {
        grid-row: 21;
    }

    // Set Up Grid columns

    & .set_3, .road_7{
        grid-column: 1;
    }

    & .road_6, .road_8 {
        grid-column: 2;
    }

    & .city_2, .set_4, .road_5, .road_13, .knight_3, .hex_3, .joker_3 {
        grid-column: 3;
    }

    & .road_4, .road_9, .road_14 {
        grid-column: 4;
    }

    & .city_3, .set_2, .knight_2, .knight_4, .hex_2, .hex_4, .joker_2, .joker_4 {
        grid-column: 5;
    }

    & .road_3, .road_10, .road_15 {
        grid-column: 6;
    }

    & .city_1, .set_5, .road_2, .hex_7 {
        grid-column: 7;
    }

    & .road_1, .road_11, .road_16 {
        grid-column: 8;
    }

    & .city_4, .set_1, .knight_1, .knight_5, .hex_1, .hex_5, .joker_1, .joker_5 {
        grid-column: 9;
    }

    & .road_0, .road_12{
        grid-column: 10;
    }

    & .set_6, .hex_6, .knight_6, .joker_6{
        grid-column: 11;
    }
    & .hex {
        width: 925%;
        justify-self: center;
        align-self: center;
    }
`
// export const Table = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-around;
//     height: 99%;
//     width: 100%;
// `
export const LeftBar = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction column;
    align-items: center;
    justify-content: space-between;
`
export const CenterBar =  styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
export const DiceHolder = styled.div`
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 215, 140, .5);
    border-radius: 4px;
`
export const Dice = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    width: 100%;
    height: 85%;
    justify-content: space-between;
    align-items: center;
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
    &.locked {
        box-shadow: 0px 0px 8px 4px red;
    }
    &.unavailable {
        box-shadow: none;
        background: purple;
        filter: grayscale(80%);
    }
`
export const TurnControl = styled.div`
    padding: 2.5%;    
    height: 10%;
    width: 95%;
    display: flex;
    justify-content: space-around;
`
export const ActionArea = styled.div`
    height: 60%;
    width: 100%;
    background: white;
    border: solid 4px black;
    border-radius: 2px;
`
export const KnightHolder = styled.div`
    height: 30px;
    width: 30px;
    margin-left: -7.5px;
    color: gray;
    filter: drop-shadow(0 0 3px navy);
    &.canBuild {
        filter: drop-shadow(0 0 6px yellow);
        cursor: pointer; 
    }
`
export const Token = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid black 1px;
    background: lightgray;
    color: green;
    align-items: center;
    justify-content: center;
    z-index: 1;
    margin-left:-7.5px;
    box-shadow: 0 0 2px black;
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
    &.unavailable {
        box-shadow: none;
        filter: grayscale(80%);
    }
`
export const SettlementHolder = styled.div`
    height: 30px;
    width: 30px;
    font-size: 28px;
    margin-left: -7.5px;
    filter: drop-shadow(0 0 3px navy);
    color: #F5F5F5;
    &.canBuild {
        filter: drop-shadow(0 0 6px yellow); 
        cursor: pointer;
    }
`
export const CityHolder = styled.div`
    height: 40px;
    width: 40px;
    font-size: 28px;
    margin-left: -10px;
    filter: drop-shadow(0 0 3px navy);
    color: #F5F5F5;
    &.canBuild {
        filter: drop-shadow(0 0 6px yellow); 
        cursor: pointer;
    }
`

export const IconText = styled.a`
    text-align: center;
    font-size: 16px;
    z-index: 1;
    padding-top: 10.5px;

    &.city {
        font-weight: bold;
        background: #F5F5F5;
        height: 20px;
        width: 20px;
        margin: 0;
        margin-top: 15px;
        padding: 0;
    }
    &.p_canBuild {
        cursor: pointer;
    }
    
`

export const RoadHolder = styled.div`
    height: 15px;
    width: 40px;

    &.road_2, &.road_5, &.road_7, &.road_13{
        transform: rotate(90deg) translate( 10px, 12px); 
    }

    &.road_0, &.road_3, &.road_6, &.road_9, &.road_11, &.road_15{
        transform: rotate(-30deg) translateY(-7px);
    }
    &.road_1, &.road_4, &.road_8, &.road_10, &.road_12, &.road_14, &.road_16{
        transform: rotate(30deg) translate(-10px, 5px);
    }

    &.canBuild {
        filter: drop-shadow(0 0 6px yellow); 
        cursor: pointer;
    }
    
`

export const ScoreTrackGrid = styled.div`
    height: 200px;
    width: 200px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));
    background: white;
    font-family: ${theme.secondaryFont};
    font-weight: lighter;
    box-shadow: 0 0 5px black;
    border: solid black 1px;


    & .score_1, .score_2, .score_3, .score_4, .score_5{
        grid-row: 1;
    }
    & .score_6 {
        grid-row: 2;
        border-left: solid black 2px;
        margin-left: -1px;
    }
    & .score_7, .score_8, .score_9, .score_10, .score_11 {
        grid-row: 3;
    }
    & .score_12 {
        grid-row: 4;
        border-right: solid black 2px;
        margin-right: -1px;
    }
    & .score_13, .score_14, .score_15 {
        grid-row: 5;
    }

    & .score_1, .score_11, .score_12, .score_13{
        grid-column: 1;
    }
    & .score_2, .score_10, .score_14{
        grid-column: 2;
    }
    & .score_3, .score_9, .score_15{
        grid-column: 3;
    }
    & .score_4, .score_8 {
        grid-column: 4;
    }
    & .score_5, .score_6, .score_7 {
        grid-column: 5;
    }
    & .total {
        grid-row: 5;
        grid-column: 5;
        width: 125%;
        margin-left: -25%;
    }
    & .score {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        font-weight: 100;
    }
`
export const GridScore = styled.div`
    height: 98%;
    width: 98%;
    border: solid black 1px;
    
`

export const ModDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .45);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40%;
    width: 40%;
    border: solid ${theme.primary} 4px;
    border-radius: 4px;
    background: ${theme.offWhite};
    font-family: ${theme.primaryFont};
    color: ${theme.light};
`

export const Button = styled.div`
    ${abutton}
    
`
export const TurnButton = styled.button`
    font-family: ${theme.primaryFont};
    height: 30px;
    width: 18%;
    border: solid ${theme.light} 4px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: ${theme.primary};
    background: ${theme.offWhite};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px ${theme.light};
    &: disabled {
        opacity: 0.7;
        background: ${theme.light};
    }
`
export const Waiting = styled.div`
    width: 100%; 
    height: 100%;
    background-image: url("/images/fallFarm.jpg");
    background-size: cover;
    filter: grayscale(80%);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: inset 0 0 3px ${theme.light};
    & a {
        z-index: 1;
        ${abutton}
    }
`

