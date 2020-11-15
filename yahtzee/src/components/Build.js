import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { roadsList, citiesList, settlementsList, knightsList, diceList } from "../features/gameBoardDataSlice";
import { toggleCanBuild, setDice } from "../features/gameBoardDataSlice";

import * as A from "../styles/ActionBarStyles"

const Build = () => {
    //State variables
    const dispatch = useDispatch();
    let roads = useSelector(roadsList);
    let cities = useSelector(citiesList);
    let settlements = useSelector(settlementsList);
    let knights = useSelector(knightsList);
    const dice = useSelector(diceList);
    const buildables = ["Road", "City", "Settlement", "Knight"];

    //Remove set aside dice
    let availableResources = JSON.parse(JSON.stringify(dice));
    availableResources = availableResources.filter(resource => resource.available)
    console.log(availableResources);

    const [resourceCount, setResourceCount] = useState({
        rock: 0,
        wheat: 0,
        sheep: 0,
        brick: 0, 
        wood: 0
    });
    //Set counts on mount
    useEffect(() => {
        let counts = {...resourceCount};
        availableResources.map(resource => {
            counts[resource.resource] += 1;
        })
        setResourceCount(counts)
    }, [])
    

    //Check if the resources are available
    const hasMaterial = (type) => {
        
        switch(type){
            case "Road":
                if(resourceCount.brick >= 1 && resourceCount.wood >= 1) {
                    return true;
                } else {
                    return false;
                }
            case "Knight":
                if(resourceCount.rock >= 1 && resourceCount.sheep >= 1 && resourceCount.wheat >= 1) {
                    return true;
                } else {
                    return false;
                }
            case "Settlement":
                if(resourceCount.brick >= 1 && resourceCount.wood >= 1 && resourceCount.sheep >= 1 && resourceCount.wheat >= 1) {
                    return true;
                } else {
                    return false;
                }
            case "City":
                if(resourceCount.rock >= 3 && resourceCount.wheat >= 2) {
                    return true;
                } else {
                    return false;
                }
            default:
                return false;
        }
    }
    

    return (
        <div>
            <A.H2>Build Site</A.H2>
            <A.MainDiv>
                <A.BuildCostCard>

                </A.BuildCostCard>
                <A.BuildForm>
                    <fieldset id="buildable">
                        {buildables.map((type, index) => {
                            const canBuild = hasMaterial(type);
                            return <label for={`build_${type}`}>
                                <input
                                    type="radio"
                                    name="buildable"
                                    value={`${type}`}
                                    disabled = {canBuild ? "" : "disabled"}
                                />
                                {type}
                            </label>
                        })}
                    </fieldset>
                </A.BuildForm>
            </A.MainDiv>
        </div>
        
    )
}

export default Build;