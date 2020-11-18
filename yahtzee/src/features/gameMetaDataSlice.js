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
                points: 0
            },
            {
                round: 2,
                points: 0
            },
            {
                round: 3,
                points: 0
            },
            {
                round: 4,
                points: 0
            },
            {
                round: 5,
                points: 0
            },
            {
                round: 6,
                points: 0
            },
            {
                round: 7,
                points: 0
            },
            {
                round: 8,
                points: 0
            },
            {
                round: 9,
                points: 0
            },
            {
                round: 10,
                points: 0
            },
            {
                round: 11,
                points: 0
            },
            {
                round: 12,
                points: 0
            },
            {
                round: 13,
                points: 0
            },
            {
                round: 14,
                points: 0
            },
            {
                round: 15,
                points: 0
            }
        ], 
        totalPoints: 0,
        trades: 0,
        tradeCount: {
            rock: 0,
            wheat: 0,
            sheep: 0,
            brick: 0,
            wood: 0
        },
        buildCounts: {
            knight: 0,
            settlement: 0,
            city: 0,
            road: 0
        },
        building: false,
        roundsPlayed: 0,
        jokerPlayed: 0,
        jokerCount: {
            rock: 0,
            wheat: 0,
            sheep: 0,
            brick: 0,
            wood: 0
        },
        gameComplete: "true"
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
            const round = action.payload.round;
            state.roundPoints = action.payload.list;
            state.totalPoints += action.payload.list[round - 1].points;
            // add to total as well
        },
        addTrade: (state, action) => {
            state.trades += action.payload;
        },
        setBuild: (state, action) => {
            state.building = action.payload;
        },
        addBuildCount: (state, action) => {
            state.buildCounts[action.payload] += 1;   
        },
        addRound: (state, action) => {
            state.roundsPlayed += 1;
        },
        resetStats: (state, action) => {
            state.diceRolled = {
                rock: 0,
                wheat: 0,
                sheep: 0,
                brick: 0, 
                wood: 0,
                gold: 0
            };
            state.roundPoints =[
                {
                    round: 1,
                    points: 0
                },
                {
                    round: 2,
                    points: 0
                },
                {
                    round: 3,
                    points: 0
                },
                {
                    round: 4,
                    points: 0
                },
                {
                    round: 5,
                    points: 0
                },
                {
                    round: 6,
                    points: 0
                },
                {
                    round: 7,
                    points: 0
                },
                {
                    round: 8,
                    points: 0
                },
                {
                    round: 9,
                    points: 0
                },
                {
                    round: 10,
                    points: 0
                },
                {
                    round: 11,
                    points: 0
                },
                {
                    round: 12,
                    points: 0
                },
                {
                    round: 13,
                    points: 0
                },
                {
                    round: 14,
                    points: 0
                },
                {
                    round: 15,
                    points: 0
                }
            ];
            state.totalPoints = 0;
            state.trades = 0;
            state.tradeCount = {
                rock: 0,
                wheat: 0,
                sheep: 0,
                brick: 0,
                wood: 0
            };
            state.buildCounts = {
                knight: 0,
                settlement: 0,
                city: 0,
                road: 0
            };
            state.building = false;
            state.roundsPlayed = 0;
            state.jokerPlayed = 0;
            state.jokerCount = {
                rock: 0,
                wheat: 0,
                sheep: 0,
                brick: 0,
                wood: 0
            }
        },
        setGameComplete: (state, action) => {
            console.log(action.payload)
            state.gameComplete = action.payload;
        }
    }
})

export const { setCurrentUser, addRoll, addRoundPoints, addTrade, setBuild, addBuildCount, setRoundPoints, addRound, resetStats, setGameComplete } = gameMetaDataSlice.actions;

export const currentUser = state => state.gameMetaData.currentUser;
export const diceRolledList = state => state.gameMetaData.diceRolled;
export const roundPoints = state => state.gameMetaData.roundPoints;
export const totalPoints = state => state.gameMetaData.totalPoints;
export const building = state => state.gameMetaData.building;
export const buildCounts = state => state.gameMetaData.buildCounts;
export const gameMetaData = state => state.gameMetaData;



export default gameMetaDataSlice.reducer;