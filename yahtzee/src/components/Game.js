import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import Hexagon from "react-hexagon";

import { hexList, roadsList, citiesList, settlementsList, knightsList, diceList } from "../features/gameBoardDataSlice";
import { toggleCanBuild, setDice } from "../features/gameBoardDataSlice";

import { diceRolledList, roundPoints, totalPoints } from "../features/gameMetaDataSlice";
import { addRoll, addRoundPoints  } from "../features/gameMetaDataSlice";


import * as G from "../styles/GameBoardStyles";
import Trade from "./Trade";

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
    const scoreBoard = useSelector(roundPoints);
    const total = useSelector(totalPoints);

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
        setActionView("build");
    }

    const handleTrade = (type, id) => {
        setActionView("trade");
    }

    const handleJoker = (type, id) => {

    }

    //===== Roll =====
    // To al/ow for update on Roll
    const diceCopy = JSON.parse(JSON.stringify(dice));
    const [DiceData, setDiceData] = useState(diceCopy)
    const [rollCount, setRollCount] = useState(0)
    const [actionView, setActionView] = useState("trade")
    
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
        

        let newList = JSON.parse(JSON.stringify(dice)); //https://stackoverflow.com/questions/42523881/how-to-clone-a-javascript-array-of-objects
        console.log(dice)
        newList.map(die => {
            if(!die.locked && die.available){
                die.resource = newDiceResource[die.id - 1]
                // Add to total dice rolled count
                dispatch(addRoll(die.resource))
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
                <G.LeftBar>
                    <G.DiceHolder>
                        <G.Dice>
                        {DiceData.map((dice, index) => {
                            let active = dice.locked ? "locked" : "";
                            let available = dice.available ? "" : "unavailable";
                            let classlist = classNames(`${dice.resource}`, `${active}`, `${available}`);
                            dieIndex +=1;
                            return <G.Die className={classlist} onClick={() => toggleLock(dice.id - 1)} key={index}>{dice.resource}</G.Die>
                        })}
                        </G.Dice>
                        <button onClick={rollCount < 3 ? () => roll() : undefined}>Roll</button>
                        <button onClick={() => handleBuild()}>Let's Build</button>
                        <button onClick={() => handleTrade()}>Let's Trade</button>
                        <button onClick={() => handleJoker()}>Joker</button>
                    </G.DiceHolder>
                    <G.ActionArea>
                        {actionView === "trade" ? <Trade/> : ""}
                    </G.ActionArea>
                </G.LeftBar>
                <G.ScoreTrackGrid>
                    {scoreBoard.map((round, index) => {
                        const classList = classNames(`score_${round.round}`, "score");
                        return <G.GridScore key={index} className={classList}>
                            {round.points}
                        </G.GridScore>
                    })}
                    <G.GridScore className={classNames("total", "score")}>{total}</G.GridScore>
                </G.ScoreTrackGrid>
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
                                // TODO: add token with matching image to the dice
                        )
                    })}
                    {knights.map((knight, index) => {
                        const classList = classNames(`knight_${knight.id}`, `${knight.resource}`, "knight");
                        return(
                            <G.KnightHolder
                                key={index}
                                className={classList}
                            >
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor"><path className="cls-1" fillRule="evenodd" d="M117.49326,98.27951a11.41528,11.41528,0,0,0-6.1519-8.2847c-10.697-5.33411-34.17046-13.212-34.17046-13.212V69.03229l.65343-.49313a22.42566,22.42566,0,0,0,8.51484-14.25174l.13151-.826h.637a8.66287,8.66287,0,0,0,8.01764-5.39167A9.43369,9.43369,0,0,0,96.30471,43.5a8.67979,8.67979,0,0,0-.61644-3.21363A4.48227,4.48227,0,0,0,93.95,37.49191l-2.16572-1.315.53834-2.35062c3.91226-17.0544-9.29979-32.41574-27.04046-32.839C64.85067.979,64.42327.975,64,.98315,63.57669.975,63.14933.979,62.71783.98726c-17.74068.42329-30.95269,15.78463-27.04046,32.839l.53834,2.35062L34.05,37.49191a4.48232,4.48232,0,0,0-1.73833,2.79448A8.67976,8.67976,0,0,0,31.69529,43.5a9.4333,9.4333,0,0,0,1.17942,4.56973,8.66286,8.66286,0,0,0,8.0176,5.39167h.637l.13151.826a22.42566,22.42566,0,0,0,8.51484,14.25174l.65343.49313v7.75047s-23.4734,7.87794-34.17042,13.212a11.4151,11.4151,0,0,0-6.1519,8.2847c-1.83285,10.697-2.15747,28.7418-2.15747,28.7418H119.65073S119.32607,108.97654,117.49326,98.27951Z"/></svg>
                            </G.KnightHolder>
                        )
                    })}
                    {knights.map((knight, index) => {
                        const classList = classNames(`knight_${knight.id}`, `${knight.resource}`, "knight");
                        return(
                            <G.IconText
                                key={index}
                                className={classList}
                            >
                                {knight.points}
                            </G.IconText>
                        )
                    })}
                    {settlements.map((settlement, index) => {
                        const classList = classNames(`set_${settlement.id}`, "settlement");
                        return (
                                <G.SettlementHolder
                                    key={index}
                                    className={classList}
                                >
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/></svg>

                                </G.SettlementHolder>
                        )
                    })}
                    {settlements.map((settlement, index) => {
                        const classList = classNames(`set_${settlement.id}`, "settlement");
                        return (
                                <G.IconText
                                    key={index}
                                    className={classList}
                                >
                                    {settlement.points}
                                </G.IconText>
                        )
                    })}
                    {cities.map((city, index)=> {
                        const classList = classNames(`city_${city.id}`, "city");
                        return(
                            <G.CityHolder
                                key={index}
                                className={classList}
                            >
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentcolor"><path className="cls-1" d="M123.29344,56.90632,99.74917,33.35065V10.11784a3.98442,3.98442,0,0,0-4.88979-3.8802L31.32988,21.06121a3.98446,3.98446,0,0,0-3.079,3.8802V58.237H7.079a3.35507,3.35507,0,0,0-3.35511,3.35507v56.92114A3.35511,3.35511,0,0,0,7.079,121.86834H120.921a3.35509,3.35509,0,0,0,3.35515-3.35511v-59.235A3.33349,3.33349,0,0,0,123.29344,56.90632Zm-95.0653,58.2518H10.4341V64.94733H28.25083ZM50.29128,103.097H38.90767V88.68448H50.29128Zm0-26.25936H38.90767V62.42512H50.29128Zm0-26.25936H38.90767V36.16577H50.29128ZM69.59048,103.097H58.20679V88.68448h11.3837Zm0-26.25936H58.20679V62.42512h11.3837Zm0-26.25936H58.20679V36.16577h11.3837Zm19.299,52.51871H77.5059V88.68448H88.88944Zm0-26.25936H77.5059V62.42512H88.88944Zm0-26.25936H77.5059V36.16577H88.88944Zm28.67647,52.20373H104.6696a3.33725,3.33725,0,0,0-.87121-.1188H99.74917V42.84237l17.81674,17.825Z"/><rect className="cls-2" x="15.56595" y="74.2865" width="7.53033" height="9.53399"/><rect className="cls-2" x="15.56595" y="96.28496" width="7.53033" height="9.53399"/><rect className="cls-2" x="104.89237" y="68.37863" width="7.53033" height="8.03459"/><rect className="cls-2" x="104.89237" y="86.91738" width="7.53033" height="8.03463"/></svg>
                            </G.CityHolder>
                        )
                    })}
                    {cities.map((city, index)=> {
                        const classList = classNames(`city_${city.id}`, "city");
                        return(
                            <G.IconText key={index} className={classList}>
                                {city.points}
                            </G.IconText>
                        )
                    })}
                    {roads.map((road, index) => {
                        const classList = classNames(`road_${road.id}`, "road");
                        return(
                            <G.RoadHolder key={index} className={classList}>
                                {road.built ? 
                                   <svg width="400" height="180"><rect x="0" y="0" width="35" height="10" fill="currentColor"/> </svg> 
                                :
                                    <svg width="400" height="180"><rect x="0" y="0" width="35" height="10" fill="gray" stroke="black" strokeWidth="3"/> </svg> 
                                }
                            </G.RoadHolder>
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