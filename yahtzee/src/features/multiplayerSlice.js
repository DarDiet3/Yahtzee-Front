import { createSlice } from "@reduxjs/toolkit";

export const multiplayerSlice = createSlice({
    name: "multiplayerSlice",
    initialState: {
        gameList: [
            {
                id: 1,
                name: "Rock On",
                participants: 4
            },
            {
                id: 2,
                name: "We Wheat Again",
                participants: 4
            },
            {
                id: 3,
                name: "Brick Haus",
                participants: 4
            },
            {
                id: 4,
                name: "Wood You Be Mine",
                participants: 4
            },
            {
                id: 5,
                name: "Black Sheep",
                participants: 4
            }
        ]
    },
    reducers: {

    }
})

export const { } = multiplayerSlice.actions;

export const games = state => state.multiplayerData.gameList;

export default multiplayerSlice.reducer;