import { configureStore } from "@reduxjs/toolkit";
import { gameMetaDataSlice } from "../features/gameMetaDataSlice";
import { gameBoardDataSlice } from "../features/gameBoardDataSlice";

export default configureStore({
    reducer: {
        gameMetaData: gameMetaDataSlice.reducer,
        gameBoardData: gameBoardDataSlice.reducer
    }

});