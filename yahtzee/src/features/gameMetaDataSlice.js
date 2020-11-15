import { createSlice } from "@reduxjs/toolkit";

const currentUserId = () => {
    try {
        const serializedUser = localStorage.getItem("currentUserId");
        if (serializedUser === null ) {
            return undefined;
        }
        return JSON.parse(serializedUser);
    } catch(err) {
        return undefined;
    }
}

const currentUserData = currentUserId();

export const gameMetaDataSlice = createSlice({
    name: "gameMetaData",
    initialState: {
        currentUser: currentUserData,
        diceRolled: {
            rock: 0,
            wheat: 0,
            sheep: 0,
            brick: 0, 
            wood: 0,
            gold: 0
        },
        roundPoints: [
            {
                round: 1,
                points: ""
            },
            {
                round: 2,
                points: ""
            },
            {
                round: 3,
                points: ""
            },
            {
                round: 4,
                points: ""
            },
            {
                round: 5,
                points: ""
            },
            {
                round: 6,
                points: ""
            },
            {
                round: 7,
                points: ""
            },
            {
                round: 8,
                points: ""
            },
            {
                round: 9,
                points: ""
            },
            {
                round: 10,
                points: ""
            },
            {
                round: 11,
                points: ""
            },
            {
                round: 12,
                points: ""
            },
            {
                round: 13,
                points: ""
            },
            {
                round: 14,
                points: ""
            },
            {
                round: 15,
                points: ""
            }
        ], 
        totalPoints: 0
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        addRoll: (state, action) => {
            state.diceRolled[action.payload] += 1;
        },
        addRoundPoints: (state, action) => {
            console.log(action.payload)
            // add to total as well
        }
    }
})

export const { setCurrentUser, addRoll, addRoundPoints } = gameMetaDataSlice.actions;

export const currentUser = state => state.gameMetaData.currentUser;
export const diceRolledList = state => state.gameMetaData.diceRolled;
export const roundPoints = state => state.gameMetaData.roundPoints;
export const totalPoints = state => state.gameMetaData.totalPoints;
export const gameMetaData = state => state.gameMetaData;



export default gameMetaDataSlice.reducer;