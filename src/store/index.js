//#region Imports here :
import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persistedReducer";
import thunk from "redux-thunk";
//#endregion

//#region CreateStore
// thunk staat toe om async calls te maken en te verwerken in de store
// reducer wordt gelinkt met de local storage feat.
export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: [thunk]
    });
//#endregion