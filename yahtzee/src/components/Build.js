import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { roadsList, citiesList, settlementsList, knightsList, diceList } from "../features/gameBoardDataSlice";
import { setRoadList, setSettlementList, setCityList, setKnightList } from "../features/gameBoardDataSlice";
import { setBuild } from "../features/gameMetaDataSlice";

import * as A from "../styles/ActionBarStyles";
import * as G from "../styles/GameBoardStyles";
import CostCard from "./BuildCostCard";

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
        switch(type) {
            case "Road":
                roadBuildCheck();
                break;
            case "Settlement":
                settlementBuildCheck();
                break;
            case "City":
                cityBuildCheck();
                break;
            case "Knight":
                knightBuildCheck();
                break;
            default:
                break;
        }
       
        
    }

    const roadBuildCheck = () => {
        let roadList = JSON.parse(JSON.stringify(roads));
        let builtRoadList = roadList.filter(road => road.built);
        
        builtRoadList.map(road => {
            switch(road.id) {
                case 1:
                    setCanBuild(2, roadList);
                    setCanBuild(3, roadList);
                    break;
                case 3:
                    setCanBuild(4, roadList);
                    break;
                case 4:
                    setCanBuild(5, roadList);
                    setCanBuild(6, roadList);
                    break;
                case 8:
                    setCanBuild(9, roadList);
                    setCanBuild(13, roadList);
                    break;
                case 6:
                case 7:
                case 9:
                case 10:
                case 11:
                case 13:
                case 14:
                case 15:
                    setCanBuild((road.id + 1), roadList);
                    break;
                default:
                    break;
            }
        })
        dispatch(setRoadList(roadList));
        console.log(roadList)
    }

    const settlementBuildCheck = () => {
        let settlementList = JSON.parse(JSON.stringify(settlements));
        let builtSettlementList = settlementList.filter(settlement => settlement.built);

        if(builtSettlementList.length !== 0) {
            builtSettlementList.map(settlment => {
                switch(settlment.id){
                    case 1: 
                        if(roads[2].built){
                            setCanBuild(2, settlementList)
                            break;
                        } else { break; }
                    case 2:
                        if(roads[5].built){
                            setCanBuild(3, settlementList)
                            break;
                        } else { break; }
                    case 3: 
                        if(roads[7].built){
                            setCanBuild(4, settlementList)
                            break;
                        } else { break; }
                    case 4:
                        if(roads[9].built){
                            setCanBuild(5, settlementList)
                            break;
                        } else { break; }
                    case 5:
                        if(roads[11].built){
                            setCanBuild(6, settlementList)
                            break;
                        } else { break; }
                    default:
                        break;
                }
            })
        }
        dispatch(setSettlementList(settlementList));
        console.log(settlementList)
    }

    const cityBuildCheck = () => {
        let cityList = JSON.parse(JSON.stringify(cities));
        let builtCityList = cityList.filter(city => city.built);

        if(builtCityList.length !== 0){
            builtCityList.map(city =>  {
                switch(city.id){
                    case 1:
                        if(roads[4].built){
                            setCanBuild(2, cityList);
                            break;
                        } else { break; }
                    case 2:
                        if(roads[13].built){
                            setCanBuild(3, cityList);
                            break;
                        } else { break; }
                    case 3:
                        if(roads[15].built){
                            setCanBuild(4, cityList);
                            break;
                        } else { break; }
                }
            })
        }
        dispatch(setCityList(cityList));
    }

    const knightBuildCheck = () => {
        let knightList = JSON.parse(JSON.stringify(knights));
        let builtKnightList = knightList.filter(knight => knight.built);

        if(builtKnightList.length !== 0){
            builtKnightList.map(knight => {
                switch(knight.id){
                    case 1:
                        setCanBuild(2, knightList);
                        break;
                    case 2:
                        setCanBuild(3, knightList);
                        break;
                    case 3:
                        setCanBuild(4, knightList);
                        break;
                    case 4:
                        setCanBuild(5, knightList);
                        break;
                    case 5: 
                        setCanBuild(6, knightList);
                        break;
                    default:
                        break;
                }
            })
        }
        dispatch(setKnightList(knightList));
    }

    const setCanBuild = (idx, list) => {
        list[idx - 1].canBuild = list[idx - 1].built ? false : true;
        //can't build at a site that is already built
    }

    const handleSelect = (type) => {
        setLocationView(true);
        checkBuild(type);
        dispatch(setBuild(type))
    }

    const handleBuild = (e, type) => {
        e.preventDefault();

        
    }
    

    return (
        <A.Div>
            <A.H2>Build Site</A.H2>
            <A.MainDiv>
                <CostCard/>
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
                    <p> </p>  
                }
                </A.BuildForm>
            </A.MainDiv>
        </A.Div>
        
    )
}

export default Build;