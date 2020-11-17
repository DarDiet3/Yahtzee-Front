import { configureStore } from "@reduxjs/toolkit";
import { gameMetaDataSlice } from "../features/gameMetaDataSlice";
import { gameBoardDataSlice } from "../features/gameBoardDataSlice";
import { multiplayerSlice } from "../features/multiplayerSlice";

export default configureStore({
    reducer: {
        gameMetaData: gameMetaDataSlice.reducer,
        gameBoardData: gameBoardDataSlice.reducer,
        multiplayerData: multiplayerSlice.reducer
    }

});