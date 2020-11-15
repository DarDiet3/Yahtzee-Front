import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { roadsList, citiesList, settlementsList, knightsList, diceList } from "../features/gameBoardDataSlice";
import { toggleCanBuild, setDice, setRoadList } from "../features/gameBoardDataSlice";
import { setBuild } from "../features/gameMetaDataSlice";

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

    const [resourceCount, setResourceCount] = useState({
        rock: 0,
        wheat: 0,
        sheep: 0,
        brick: 0, 
        wood: 0
    });
    const [locationView, setLocationView] = useState(false)

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

    //Check for lcations able to build
    const checkBuild = (type) => {
        dispatch(setBuild(true));
        roadBuildCheck()
    }

    const roadBuildCheck = () => {
        let roadList = JSON.parse(JSON.stringify(roads));
        let builtRoadList = roadList.filter(road => road.built);
        
        builtRoadList.map(road => {
            switch(road.id) {
                case 1:
                    toggleRoadBuild(2, roadList);
                    toggleRoadBuild(3, roadList);
                    break;
                case 3:
                    toggleRoadBuild(4, roadList);
                    break;
                case 4:
                    toggleRoadBuild(5, roadList);
                    toggleRoadBuild(6, roadList);
                    break;
                case 8:
                    toggleRoadBuild(9, roadList);
                    toggleRoadBuild(13, roadList);
                    break;
                case 6:
                case 7:
                case 9:
                case 10:
                case 11:
                case 13:
                case 14:
                case 15:
                    toggleRoadBuild((road.id + 1), roadList);
                    break;
                default:
                    break;
            }
        })
        dispatch(setRoadList(roadList));
        console.log(roadList)
    }
    const toggleRoadBuild = (idx, roadList) => {
        roadList[idx - 1].canBuild = roadList[idx - 1].built ? false : true;
        //can't build at a site that is already built
    }

    const handleSelect = (type) => {
        setLocationView(true);
        checkBuild(type);
    }

    const handleBuild = (e,) => {
        e.preventDefault();
        dispatch(setBuild(false))
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
                                    disabled={canBuild ? "" : "disabled"}
                                    onClick={() => handleSelect(type)}
                                />
                                {type}
                            </label>
                        })}
                    </fieldset>
                    {locationView ? 
                        <p>Select Location</p>
                        
                    : 
                    <></>  
                }
                </A.BuildForm>
            </A.MainDiv>
        </div>
        
    )
}

export default Build;