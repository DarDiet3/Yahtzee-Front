import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import Hexagon from "react-hexagon";

import { hexList, roadsList, citiesList, settlementsList, knightsList, diceList } from "../features/gameBoardDataSlice";
import { toggleCanBuild, setDice } from "../features/gameBoardDataSlice";

import { diceRolledList } from "../features/gameMetaDataSlice";
import { addRoll } from "../features/gameMetaDataSlice";


import * as G from "../styles/GameBoardStyles";

const Game = () => {
    // State Variables
    const dispatch = useDispatch();
    const hexes = useSelector(hexList);
    let roads = useSelector(roadsList);
    let cities = useSelector(citiesList);
    let settlements = useSelector(settlementsList);
    let knights = useSelector(knightsList);
    const dice = useSelector(diceList);
    const resources = ["rock", "wheat", "sheep", "brick", "wood", "gold"];

    //Functions
    const toggleCanBuild = (type, id) => {
        let editList;
        switch (type) {
            case "road":
                console.log("road")
                return editList = [...roads]
            case "city":
                console.log("city")
                return editList = [...cities]
            case "settlement":
                console.log("settlement")
                return editList = [...settlements]
            case "knight":
                console.log("knight")
                return editList = [...knights]
            default:
                console.log("missed")
        }
        editList[id - 1].canBuild = !editList[id - 1].canBuild;
        return editList;
    }

    const handleBuild = (type, id) => {

    }

    // To alow for update on Roll
    const diceCopy = JSON.parse(JSON.stringify(dice));
    const [DiceData, setDiceData] = useState(diceCopy)
    const [rollCount, setRollCount] = useState(0)
    
    const roll = () => {
        setRollCount(rollCount + 1);
        console.log(rollCount)
        const dice1 = Math.floor(Math.random() * 6);
        const dice2 = Math.floor(Math.random() * 6);
        const dice3 = Math.floor(Math.random() * 6);
        const dice4 = Math.floor(Math.random() * 6);
        const dice5 = Math.floor(Math.random() * 6);
        const dice6 = Math.floor(Math.random() * 6);

        let newDiceResource = [resources[dice1], resources[dice2], resources[dice3], resources[dice4], resources[dice5], resources[dice6]];
        // Add to total dice rolled count
        newDiceResource.map(die => {
            dispatch(addRoll(die))
        })

        let newList = JSON.parse(JSON.stringify(dice)); //https://stackoverflow.com/questions/42523881/how-to-clone-a-javascript-array-of-objects
        console.log(dice)
        newList.map(die => {
            if(!die.locked){
                die.resource = newDiceResource[die.id - 1]
            }
        })

        dispatch(setDice(newList));
    }

    const toggleLock = (index) => {
        let newList = JSON.parse(JSON.stringify(dice));
        newList[index].locked = !newList[index].locked;
        dispatch(setDice(newList))
    }

    useEffect(() => {
        setDiceData(dice)
    }, [dice])

    let dieIndex = 0;
    return (
        <G.Div>
            <G.Table>
                <G.DiceHolder>
                    <G.Dice>
                    {DiceData.map((dice, index) => {
                        let active = dice.locked ? "locked" : "";
                        let classlist = classNames(`${dice.resource}`, `${active}`);
                        dieIndex +=1;
                        return <G.Die className={classlist} onClick={() => toggleLock(dice.id - 1)} key={index}>{dice.resource}</G.Die>
                    })}
                    </G.Dice>
                    <button onClick={rollCount < 3 ? () => roll() : undefined}>Roll</button>
                </G.DiceHolder>
                <G.Board>
                    {hexes.map((hex, index) => {
                        const classList = classNames(`hex_${hex.id}`, `${hex.resource}`, "hex");
                        const hexStyles = {
                            strokeWidth: "25",
                            stroke: "green",
                            fill: hex.resource === "wheat" ? "tan" : 
                                hex.resource === "brick" ? "red" :
                                hex.resource === "wood" ? "brown" :
                                hex.resource === "rock" ? "darkgray" : 
                                hex.resource === "sheep" ? "white" :
                                hex.resource === "desert" ? "gold" : "lightblue"
                        };
                        return(
                            <Hexagon
                                key={index}
                                className={classList}
                                hexProps={{className:`${hex.resource}`}}
                                style={hexStyles}
                                ></Hexagon>
                        )
                    })}
                </G.Board>
                <button onClick={() => toggleCanBuild("road", 2)}>Toggle</button>
            </G.Table>
        </G.Div>


    )
}

export default Game;



/**
 * =============== Game Ruules and Logic ================
 *
 *
 * - 6 dice, 1 resource on each side
 * -- Can use same roll and dice set up as before
 * -----have an index so that it will pick a random resource and assign that out
 *
 * - Game sheet
 * -- Game board
 * -- Build Card
 * -- Score road
 *
 * Game Play
 * - Round counter
 * - 1 roll, most gold goes first
 *
 * - Roll counter (3 rolls max)
 * - Set some dice aside
 * - After three rolls or selecting "stand Pat"
 *
 * Building
 *
 *
 */