import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    const diceCopy = Object.assign({}, dice);
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
                console.log(die);
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


    return (
        <G.Div>
            <G.Table>
                <G.DiceHolder>
                    <G.Die className={DiceData[0].resource} onClick={() => toggleLock(0)}> {DiceData[0].resource} </G.Die>
                    <G.Die className={DiceData[1].resource} onClick={() => toggleLock(1)}> {DiceData[1].resource} </G.Die>
                    <G.Die className={DiceData[2].resource} onClick={() => toggleLock(2)}> {DiceData[2].resource} </G.Die>
                    <G.Die className={DiceData[3].resource} onClick={() => toggleLock(3)}> {DiceData[3].resource} </G.Die>
                    <G.Die className={DiceData[4].resource} onClick={() => toggleLock(4)}> {DiceData[4].resource} </G.Die>
                    <G.Die className={DiceData[5].resource} onClick={() => toggleLock(5)}> {DiceData[5].resource} </G.Die>
                    <button onClick={rollCount < 3 ? () => roll() : undefined}>Roll</button>
                </G.DiceHolder>
                <G.Board>
                    <button onClick={() => toggleCanBuild("road", 2)}>Toggle</button>
                </G.Board>
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