import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { diceList } from "../features/gameBoardDataSlice";
import { setDice } from "../features/gameBoardDataSlice";
import { addTrade } from "../features/gameMetaDataSlice";

import * as A from "../styles/ActionBarStyles";


const Trade = () => {
    //state Variables
    const dispatch = useDispatch();
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


    const [updateResources, setUpdatedResources] = useState([]);

    const [goldCount, setGoldCount] = useState(availableGold.length)

    const handleChange = (resource) => {
        const newResource = {...resource};
        const newResourceList = [...resources];
        const updates = [...updateResources];
        const checked = !newResource.checked;
        if(checked) {
            if(goldCount >= 2){
                newResource.checked = !newResource.checked;
                newResourceList[newResource.id - 1] = newResource;
                updates.push(newResource.resource);
                setUpdatedResources(updates);
                setResources(newResourceList);
                setGoldCount(goldCount - 2);
            }
        } else {
            newResource.checked = !newResource.checked;
            newResourceList[newResource.id - 1] = newResource;
            const index = updates.indexOf(newResource.resource)
            updates.splice(index, 1);
            setUpdatedResources(updates)
            setResources(newResourceList)
            setGoldCount(goldCount + 2)
        };
    }

    const handleTrade = (e, updateResources) => {
        e.preventDefault();
        const tradesMade=Math.floor((goldId.length) / 2);
        dispatch(addTrade(tradesMade));
        //Update Rsource list to reflect trade. available false is like setting aside
        //Shift twice to account for both gold dice used
        for(let i = 0; i < tradesMade; i++) {
            const idx1 = goldId[0] - 1;
            const idx2 = goldId[1] - 1;
            availableResources[idx1].resource = updateResources[i];
            availableResources[idx2].available = false;
            goldId.shift();
            goldId.shift();
        }
        dispatch(setDice(availableResources));
    }


    return(
        <A.Div>
            <A.H2>Trade Post</A.H2>
            <A.MainDiv>
                {availableGold.length < 2 ? 
                    <p>Sorry, it takes 2 Gold to trade</p>
                :
                <A.TradePost>
                    <p><A.Bold>Gold Avaiable: </A.Bold> {goldCount} </p>
                    <p><A.Bold>Select Resource</A.Bold></p>
                    <A.ResourceForm onSubmit={(e) => handleTrade(e, updateResources)}>
                        {resources.map((resource, index) => {
                            return(
                                <div key={index}>
                                    <label for={`select_${resource.resource}`}  >
                                        <input 
                                        id={`select_${resource.resource}`} 
                                        name={`${resource.resource}`} 
                                        type="checkbox"  
                                        onClick={() => handleChange(resource)}
                                        />
                                        <A.Label className={`${resource.checked ? "selected" : "not"}`}><A.ResourceLabel className={`${resource.resource}`} /></A.Label>
                                        </label>
                                </div>
                            )
                        })}
                        <A.ActButton type="submit">Make Trade</A.ActButton>
                    </A.ResourceForm>
                </A.TradePost>
            }
            </A.MainDiv>
        </A.Div>
    )
    
}

export default Trade;