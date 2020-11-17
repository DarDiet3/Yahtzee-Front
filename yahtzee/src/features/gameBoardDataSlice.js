import { createSlice } from "@reduxjs/toolkit";

export const gameBoardDataSlice = createSlice({
    name: "gameBoardData",
    initialState: {
        hexList: [
            {
                id: 1,
                resource: "rock"
            },
            {
                id: 2,
                resource: "wheat"
            },
            {
                id: 3,
                resource: "sheep"
            },
            {
                id: 4,
                resource: "wood"
            },
            {
                id: 5,
                resource: "brick"
            },
            {
                id: 6,
                resource: "desert"
            },
            {
                id: 7,
                resource: ""
            }
        ],
        roads: [
            {
                id: 1,
                points: 1,
                built: false,
                canBuild: true
            },
            {
                id: 2,
                points: 1,
                built: true,
                canBuild: false
            },
            {
                id: 3,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 4,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 5,
                points: 1,
                built: true,
                canBuild: false
            },
            {
                id: 6,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 7,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 8,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 9,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 10,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 11,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 12,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 13,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 14,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 15,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 16,
                points: 1,
                built: false,
                canBuild: false
            },
            {
                id: 0,
                points: 0,
                built: true,
                canBuild: false
            },

        ],
        cities: [
            {
                id: 1, 
                built: true,
                canBuild: false,
                points: 7
            },
            {
                id: 2, 
                built: false,
                canBuild: false,
                points: 12
            },
            {
                id: 3, 
                built: false,
                canBuild: false,
                points: 20
            },
            {
                id: 4, 
                built: false,
                canBuild: false,
                points: 30
            }
        ],
        settlements: [
            {
                id: 1, 
                built: false,
                canBuild: true, 
                points: 3
            },
            {
                id: 2, 
                built: false,
                canBuild: false, 
                points: 4
            },
            {
                id: 3, 
                built: false,
                canBuild: false, 
                points: 5
            },
            {
                id: 4, 
                built: false,
                canBuild: false, 
                points: 7
            },
            {
                id: 5, 
                built: false,
                canBuild: false, 
                points: 9
            },
            {
                id: 6, 
                built: false,
                canBuild: false, 
                points: 11
            }
        ],
        knights: [
            {
                id: 1,
                built: false,
                canBuild: true, 
                points: 1,
                resource: "rock",
                jokerPlayed: false,
                jokerCanPlay: false
            },
            {
                id: 2,
                built: false,
                canBuild: false, 
                points: 2,
                resource: "wheat",
                jokerPlayed: false,
                jokerCanPlay: false
            },
            {
                id: 3,
                built: false,
                canBuild: false, 
                points: 3,
                resource: "sheep",
                jokerPlayed: false,
                jokerCanPlay: false
            },
            {
                id: 4,
                built: false,
                canBuild: false, 
                points: 4,
                resource: "wood",
                jokerPlayed: false,
                jokerCanPlay: false
            },
            {
                id: 5,
                built: false,
                canBuild: false, 
                points: 5,
                resource: "brick",
                jokerPlayed: false,
                jokerCanPlay: false
            },
            {
                id: 6,
                built: false,
                canBuild: false, 
                points: 6,
                resource: "any",
                jokerPlayed: false,
                jokerCanPlay: false
            }
        ],
        resourceDice: [
            {
                id: 1,
                resource: "rock",
                locked: false,
                toBuild: false,
                available: true,
                img: "/images/icons/rock.png"
            },
            {
                id: 2,
                resource: "wheat",
                locked: false,
                toBuild: false,
                available: true,
                img: "/images/icons/wheat.png"
            },
            {
                id: 3,
                resource: "sheep",
                locked: false,
                toBuild: false,
                available: true,
                img: "/images/icons/sheep.png"
            },
            {
                id: 4,
                resource: "brick",
                locked: false,
                toBuild: false,
                available: true,
                img: "/images/icons/brick.png"
            },
            {
                id: 5,
                resource: "wood",
                locked: false,
                toBuild: false,
                available: true,
                img: "/images/icons/wood.png"
            },
            {
                id: 6,
                resource: "gold",
                locked: false,
                toBuild: false,
                available: true,
                img: "/images/icons/gold.png"
            }
        ]
    },
    reducers: {
        setDice: (state, action) => {
            console.log(action.payload)
            state.resourceDice = action.payload;
        },
        setRoadList: (state, action) => {
            state.roads = action.payload;
        },
        setSettlementList: (state, action) => {
            state.settlements = action.payload;
        },
        setCityList: (state, action) => {
            state.cities = action.payload;
        },
        setKnightList: (state, action) => {
            state.knights = action.payload;
        },
        resetBoard: (state, action) => {
            state.roads = [
                {
                    id: 1,
                    points: 1,
                    built: false,
                    canBuild: true
                },
                {
                    id: 2,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 3,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 4,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 5,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 6,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 7,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 8,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 9,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 10,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 11,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 12,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 13,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 14,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 15,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 16,
                    points: 1,
                    built: false,
                    canBuild: false
                },
                {
                    id: 0,
                    points: 0,
                    built: true,
                    canBuild: false
                },
    
            ];
            state.cities = [
                {
                    id: 1, 
                    built: false,
                    canBuild: false,
                    points: 7
                },
                {
                    id: 2, 
                    built: false,
                    canBuild: false,
                    points: 12
                },
                {
                    id: 3, 
                    built: false,
                    canBuild: false,
                    points: 20
                },
                {
                    id: 4, 
                    built: false,
                    canBuild: false,
                    points: 30
                }
            ];
            state.settlements = [
                {
                    id: 1, 
                    built: false,
                    canBuild: true, 
                    points: 3
                },
                {
                    id: 2, 
                    built: false,
                    canBuild: false, 
                    points: 4
                },
                {
                    id: 3, 
                    built: false,
                    canBuild: false, 
                    points: 5
                },
                {
                    id: 4, 
                    built: false,
                    canBuild: false, 
                    points: 7
                },
                {
                    id: 5, 
                    built: false,
                    canBuild: false, 
                    points: 9
                },
                {
                    id: 6, 
                    built: false,
                    canBuild: false, 
                    points: 11
                }
            ];
            state.knights = [
                {
                    id: 1,
                    built: false,
                    canBuild: true, 
                    points: 1,
                    resource: "rock",
                    jokerPlayed: false,
                    jokerCanPlay: false
                },
                {
                    id: 2,
                    built: false,
                    canBuild: false, 
                    points: 2,
                    resource: "wheat",
                    jokerPlayed: false,
                    jokerCanPlay: false
                },
                {
                    id: 3,
                    built: false,
                    canBuild: false, 
                    points: 3,
                    resource: "sheep",
                    jokerPlayed: false,
                    jokerCanPlay: false
                },
                {
                    id: 4,
                    built: false,
                    canBuild: false, 
                    points: 4,
                    resource: "wood",
                    jokerPlayed: false,
                    jokerCanPlay: false
                },
                {
                    id: 5,
                    built: false,
                    canBuild: false, 
                    points: 5,
                    resource: "brick",
                    jokerPlayed: false,
                    jokerCanPlay: false
                },
                {
                    id: 6,
                    built: false,
                    canBuild: false, 
                    points: 6,
                    resource: "any",
                    jokerPlayed: false,
                    jokerCanPlay: false
                }
            ];
            state.resourceDice = [
                {
                    id: 1,
                    resource: "rock",
                    locked: false,
                    toBuild: false,
                    available: true
                },
                {
                    id: 2,
                    resource: "wheat",
                    locked: false,
                    toBuild: false,
                    available: true
                },
                {
                    id: 3,
                    resource: "sheep",
                    locked: false,
                    toBuild: false,
                    available: true
                },
                {
                    id: 4,
                    resource: "brick",
                    locked: false,
                    toBuild: false,
                    available: true
                },
                {
                    id: 5,
                    resource: "wood",
                    locked: false,
                    toBuild: false,
                    available: true
                },
                {
                    id: 6,
                    resource: "gold",
                    locked: false,
                    toBuild: false,
                    available: true
                }
            ]
        }
    }
})

export const { setDice, setRoadList, setSettlementList, setCityList, setKnightList, resetBoard } = gameBoardDataSlice.actions;

export const data = state => state.gameBoardData;
export const hexList = state => state.gameBoardData.hexList;
export const roadsList = state => state.gameBoardData.roads;
export const citiesList = state => state.gameBoardData.cities;
export const settlementsList = state => state.gameBoardData.settlements;
export const knightsList = state => state.gameBoardData.knights;
export const diceList = state => state.gameBoardData.resourceDice;

export default gameBoardDataSlice.reducer;