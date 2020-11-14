import { configureStore } from "@reduxjs/toolkit";
import { gameMetaDataSlice } from "../features/gameMetaDataSlice";

export default configureStore({
    reducer: {
        gameMetaData: gameMetaDataSlice.reducer,
    }

});