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
    width: 450px;
    height: 411px;
    grid-template-columns: repeat(13, minmax(0, 3.25%));
    grid-template-rows: repeat(21, minmax(0, 3.25%));
    gap: 1.27% 3.75%;
    background: lightblue;
    box-shadow: 0px 0px 5px navy;
    border-radius: 25px;
    align-items: center;
    justify-content: center;


    // Set Up Grid Rows

    & .city_1, .city_2, .knight_1, .knight_2{
        grid-row: 3;
    }

    & .road_2, .road_5, .hex_1, .hex_2{
        grid-row: 5;
    }

    & .road_0, .road_1, .road_2, .road_3, .road_4, .road_5, .road_6 {
        grid-row: 8;
    }

    & .set_1, .set_2, .set_3, .knight_3, .knight_6 {
        grid-row: 9;
    }

    & .road_7, .hex_3, .hex_6, .hex_7{
        grid-row: 11;
    }

    & .road_8, .road_9, .road_10, .road_11, .road_12 {
        grid-row: 14;
    }

    & .set_4, .set_5, .set_6, .knight_4, .knight_5 {
        grid-row: 15;
    }

    & .road_13, .hex_4, .hex_5{
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

    & .city_2, .set_4, .road_5, .road_13, .knight_3, .hex_3 {
        grid-column: 3;
    }

    & .road_4, .road_9, .road_14 {
        grid-column: 4;
    }

    & .city_3, .set_2, .knight_2, .knight_4, .hex_2, .hex_4 {
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

    & .city_4, .set_1, .knight_1, .knight_5, .hex_1, .hex_5 {
        grid-column: 9;
    }

    & .road_0, .road_12{
        grid-column: 10;
    }

    & .set_6, .hex_6, .knight_6{
        grid-column: 11;
    }
    & .hex {
        width: 925%;
        justify-self: center;
        align-self: center;
    }
`
export const Table = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 98%;
    width: 55%;
    background: #2F3D41;
`

export const DiceHolder = styled.div`
    height: 100px;
    width: 25%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Dice = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    width: 60%;
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
`

export const KnightHolder = styled.div`
    height: 30px;
    width: 30px;
    margin-left: -7.5px;
    color: gray;
    filter: drop-shadow(0 0 3px navy);
`

export const SettlementHolder = styled.div`
    height: 30px;
    width: 30px;
    font-size: 28px;
    margin-left: -7.5px;
    filter: drop-shadow(0 0 3px navy);
    color: #F5F5F5;
`
export const CityHolder = styled.div`
    height: 40px;
    width: 40px;
    font-size: 28px;
    margin-left: -10px;
    filter: drop-shadow(0 0 3px navy);
    color: #F5F5F5;
`

export const IconText = styled.p`
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
    
`
