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
        }
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        addRoll: (state, action) => {
            console.log(action.payload)
            // state.diceRolled[action.payload]
        }
    }
})

export const { setCurrentUser, addRoll } = gameMetaDataSlice.actions;

export const currentUser = state => state.gameMetaData.currentUser;
export const diceRolledList = state => state.gameMetaData.diceRolled;
export const gameMetaData = state => state.gameMetaData;


export default gameMetaDataSlice.reducer;