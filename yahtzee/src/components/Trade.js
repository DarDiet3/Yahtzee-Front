import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { diceList } from "../features/gameBoardDataSlice";
import { addTrade } from "../features/gameBoardDataSlice";

import * as A from "../styles/ActionBarStyles";
import Game from "./Game";

const Trade = () => {
    //state Variables
    const dice = useSelector(diceList);
    const resources = ["rock", "wheat", "sheep", "brick", "wood"];

    //Functions
    let availableResources = JSON.parse(JSON.stringify(dice));

    let availableGold = availableResources.filter(die => die.resource === "gold")
    console.log(availableGold.length)



    return(
        <div>
            <A.H2>Trade Post</A.H2>
            <A.MainDiv>
                {availableGold.length < 2 ? 
                    <p>Sorry, it takes 2 Gold to trade</p>
                :
                <A.TradePost>
                    Yo
                </A.TradePost>
            }
            </A.MainDiv>
        </div>
    )
    
}

export default Trade;