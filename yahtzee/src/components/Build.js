import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { roadsList, citiesList, settlementsList, knightsList, diceList } from "../features/gameBoardDataSlice";
import { setRoadList, setSettlementList, setCityList, setKnightList } from "../features/gameBoardDataSlice";
import { setBuild } from "../features/gameMetaDataSlice";

import * as A from "../styles/ActionBarStyles";
import * as G from "../styles/GameBoardStyles";

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
    
    const roadClassList = classNames("title", "road");
    const knightClassList = classNames("title", "knight");
    const settlementClassList = classNames("title", "settlement");
    const cityClassList = classNames("title", "city");

    return (
        <A.Div>
            <A.H2>Build Site</A.H2>
            <A.MainDiv>
                <A.BuildCostCard>
                    <A.BuildLine> 
                        <A.BuildSquare className={roadClassList}>
                            <G.RoadHolder>
                                <svg width="35" height="10"><rect x="0" y="0" width="35" height="10" fill="currentColor" stroke="black" strokeWidth="3"/> </svg>
                            </G.RoadHolder>
                        </A.BuildSquare>
                        <A.BuildSquare className={"brick"}></A.BuildSquare>
                        <A.BuildSquare className={"wood"}></A.BuildSquare>
                    </A.BuildLine>
                    <A.BuildLine> 
                        <A.BuildSquare className={knightClassList}>
                            <G.KnightHolder>
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor"><path className="cls-1" fillRule="evenodd" d="M117.49326,98.27951a11.41528,11.41528,0,0,0-6.1519-8.2847c-10.697-5.33411-34.17046-13.212-34.17046-13.212V69.03229l.65343-.49313a22.42566,22.42566,0,0,0,8.51484-14.25174l.13151-.826h.637a8.66287,8.66287,0,0,0,8.01764-5.39167A9.43369,9.43369,0,0,0,96.30471,43.5a8.67979,8.67979,0,0,0-.61644-3.21363A4.48227,4.48227,0,0,0,93.95,37.49191l-2.16572-1.315.53834-2.35062c3.91226-17.0544-9.29979-32.41574-27.04046-32.839C64.85067.979,64.42327.975,64,.98315,63.57669.975,63.14933.979,62.71783.98726c-17.74068.42329-30.95269,15.78463-27.04046,32.839l.53834,2.35062L34.05,37.49191a4.48232,4.48232,0,0,0-1.73833,2.79448A8.67976,8.67976,0,0,0,31.69529,43.5a9.4333,9.4333,0,0,0,1.17942,4.56973,8.66286,8.66286,0,0,0,8.0176,5.39167h.637l.13151.826a22.42566,22.42566,0,0,0,8.51484,14.25174l.65343.49313v7.75047s-23.4734,7.87794-34.17042,13.212a11.4151,11.4151,0,0,0-6.1519,8.2847c-1.83285,10.697-2.15747,28.7418-2.15747,28.7418H119.65073S119.32607,108.97654,117.49326,98.27951Z"/></svg>
                            </G.KnightHolder>
                        </A.BuildSquare>
                        <A.BuildSquare className={"rock"}></A.BuildSquare>
                        <A.BuildSquare className={"sheep"}></A.BuildSquare>
                        <A.BuildSquare className={"wheat"}></A.BuildSquare>
                    </A.BuildLine>
                    <A.BuildLine> 
                        <A.BuildSquare className={settlementClassList}>
                            <G.SettlementHolder>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/></svg>
                            </G.SettlementHolder>
                        </A.BuildSquare>
                        <A.BuildSquare className={"brick"}></A.BuildSquare>
                        <A.BuildSquare className={"wood"}></A.BuildSquare>
                        <A.BuildSquare className={"sheep"}></A.BuildSquare>
                        <A.BuildSquare className={"wheat"}></A.BuildSquare>
                    </A.BuildLine>
                    <A.BuildLine> 
                        <A.BuildSquare className={cityClassList}>
                            <G.CityHolder>
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentcolor"><path className="cls-1" d="M123.29344,56.90632,99.74917,33.35065V10.11784a3.98442,3.98442,0,0,0-4.88979-3.8802L31.32988,21.06121a3.98446,3.98446,0,0,0-3.079,3.8802V58.237H7.079a3.35507,3.35507,0,0,0-3.35511,3.35507v56.92114A3.35511,3.35511,0,0,0,7.079,121.86834H120.921a3.35509,3.35509,0,0,0,3.35515-3.35511v-59.235A3.33349,3.33349,0,0,0,123.29344,56.90632Zm-95.0653,58.2518H10.4341V64.94733H28.25083ZM50.29128,103.097H38.90767V88.68448H50.29128Zm0-26.25936H38.90767V62.42512H50.29128Zm0-26.25936H38.90767V36.16577H50.29128ZM69.59048,103.097H58.20679V88.68448h11.3837Zm0-26.25936H58.20679V62.42512h11.3837Zm0-26.25936H58.20679V36.16577h11.3837Zm19.299,52.51871H77.5059V88.68448H88.88944Zm0-26.25936H77.5059V62.42512H88.88944Zm0-26.25936H77.5059V36.16577H88.88944Zm28.67647,52.20373H104.6696a3.33725,3.33725,0,0,0-.87121-.1188H99.74917V42.84237l17.81674,17.825Z"/><rect className="cls-2" x="15.56595" y="74.2865" width="7.53033" height="9.53399"/><rect className="cls-2" x="15.56595" y="96.28496" width="7.53033" height="9.53399"/><rect className="cls-2" x="104.89237" y="68.37863" width="7.53033" height="8.03459"/><rect className="cls-2" x="104.89237" y="86.91738" width="7.53033" height="8.03463"/></svg>
                            </G.CityHolder>
                        </A.BuildSquare>
                        <A.BuildSquare className={"rock"}></A.BuildSquare>
                        <A.BuildSquare className={"rock"}></A.BuildSquare>
                        <A.BuildSquare className={"rock"}></A.BuildSquare>
                        <A.BuildSquare className={"wheat"}></A.BuildSquare>
                        <A.BuildSquare className={"wheat"}></A.BuildSquare>
                    </A.BuildLine>
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
                    <p> </p>  
                }
                </A.BuildForm>
            </A.MainDiv>
        </A.Div>
        
    )
}

export default Build;