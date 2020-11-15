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
                id: 0,
                points: 1,
                built: true,
                canBuild: false
            },
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
            },{
                id: 17,
                points: 1,
                built: false,
                canBuild: false
            }

        ],
        cities: [
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
                build: false,
                canBuild: true, 
                points: 1,
                resource: "rock",
                jokerPlayed: false
            },
            {
                id: 2,
                build: false,
                canBuild: false, 
                points: 2,
                resource: "wheat",
                jokerPlayed: false
            },
            {
                id: 3,
                build: false,
                canBuild: false, 
                points: 3,
                resource: "sheep",
                jokerPlayed: false
            },
            {
                id: 4,
                build: false,
                canBuild: false, 
                points: 4,
                resource: "wood",
                jokerPlayed: false
            },
            {
                id: 5,
                build: false,
                canBuild: false, 
                points: 5,
                resource: "brick",
                jokerPlayed: false
            }
        ] 
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
})