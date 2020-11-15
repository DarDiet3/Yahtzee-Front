import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { diceList } from "../features/gameBoardDataSlice";
import { addTrade } from "../features/gameBoardDataSlice";

import * as A from "../styles/ActionBarStyles";
import * as G from "../styles/GameBoardStyles";
import Game from "./Game";

const Trade = () => {
    //state Variables
    const dice = useSelector(diceList);
    const [resources, setResources] = useState([
        { 
            id: 1,
            resource: "rock",
            checked: false
        },
        {
            resource: "wheat",
            checked: false,
            id:2
        },
        {
            resource: "sheep",
            checked: false,
            id: 3
        },
        {
            resource: "brick",
            checked: false,
            id: 4
        },
        {
            resource: "wood",
            checked: false,
            id: 5
        }
    ]);

    //Functions
    let availableResources = JSON.parse(JSON.stringify(dice));

    let availableGold = availableResources.filter(die => die.resource === "gold");
    let goldId = [];
    availableGold.map(gold => {goldId.push(gold.id)});


    const [updateResources, setUpdatedResources] = useState(availableResources);

    const [goldCount, setGoldCount] = useState(availableGold.length)

    const handleChange = (resource) => {
        const newResource = {...resource}
        const newResourceList = [...resources]
        console.log(newResource)
        const checked = !newResource.checked;
        if(checked) {
            if(goldCount >= 2){
                newResource.checked = !newResource.checked;
                newResourceList[newResource.id - 1] = newResource;
                console.log(newResourceList)
                setResources(newResourceList)
                setGoldCount(goldCount - 2)
            }
        } else {
            newResource.checked = !newResource.checked;
            newResourceList[newResource.id - 1] = newResource;
            console.log(newResourceList)
            setResources(newResourceList)
            setGoldCount(goldCount + 2)
        };
    
        // setGoldCount(goldCount - 2)
    }


    return(
        <div>
            <A.H2>Trade Post</A.H2>
            <A.MainDiv>
                {availableGold.length < 2 ? 
                    <p>Sorry, it takes 2 Gold to trade</p>
                :
                <A.TradePost>
                    <p><A.Bold>Gold Avaiable: </A.Bold> {goldCount} </p>
                    <p><A.Bold>Select Resource</A.Bold></p>
                    <A.ResourceForm>
                        {resources.map((resource, index) => {
                            console.log(resource)
                            return(
                                <div>
                                    <label for={`select_${resource.resource}`}>
                                        <input  
                                        id={`select_${resource.resource}`} 
                                        name={`${resource.resource}`} 
                                        type="checkbox"  
                                        onClick={() => handleChange(resource)}
                                        />
                                        <A.ResourceLabel className={`${resource.resource}`}/></label>
                                    
                                </div>
                            )
                        })}
                    </A.ResourceForm>
                </A.TradePost>
            }
            </A.MainDiv>
        </div>
    )
    
}

export default Trade;