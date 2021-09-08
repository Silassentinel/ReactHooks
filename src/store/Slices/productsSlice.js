//#region imports here:
import { createSlice } from "@reduxjs/toolkit";
//#endregion

//#region if async thunk here
//#endregion

//#region slice here
// verwijderen door te filteren op het door gekregen product
// in de app geven we het hele product mee met de remove
// wat filteren op ID mogelijk maakt
// we geven de hele array terug ZONDER het terug gekregen product

// bij ADD gaan we het hele product in de array stoppen

// clear is een DEV functie en wordt nergens in de app gebruikt 
//maar kan gemakkelijk gebind worden aan een knopje om snel de lijst leeg te maken 

const ProductsSlice = createSlice(
    {
        name: "products",
        initialState: [],
        reducers:
        {
            remove: (state, action) => 
            {
                return state.filter(element => element.id !== action.payload.id);
            },
            add: (state, action) =>{state.push(action.payload)},
            clear: (state, action) => 
            {
                state = [];
            }
        }
    });
//#endregion

//#region export here:
export const { remove, add, clear } = ProductsSlice.actions; // we exporten de acties
export const ProductsSliceReducer = ProductsSlice.reducer; // reducer om te linken in de root reducer
//#endregion
