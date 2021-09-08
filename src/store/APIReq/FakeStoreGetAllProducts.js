import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Asynchrone code die uitgevoerd wordt moet in een ander type van reducer
// Dit omdat de standaard reducers enkel maar synchrone code uitvoeren en dus 
// niet om kunnen met asyncrhone code
// Daarom gebruiken we createAsyncThunk, waarbij we een naam maken voor de action type ('apiCalls/getAllProducts')
// en daarna dan asynchrone code mee te geven
// Dit maakt gebruik van de async await syntax mogelijk
export const getAllProducts = createAsyncThunk('apiCalls/getAllProducts', async () =>
{
    const response = await axios({
        method: 'GET',
        url: `https://fakestoreapi.com/products`
    });
    return response;
});
const getAllProductsSlice = createSlice({
    name: 'getAllProducts',
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    // Hier moeten we dan wel nog de extraReducers definieren waar we  de acties gaan opvangen en de state dus wijzigen
    // een asyncThunkReducer heeft drie toestanden namelijk:  pending, fulfilled en rejected die we dan kunnen opvangen zoals hieronder
    extraReducers: {
        [getAllProducts.pending]: (state, action) =>
        {
            state.status = 'loading';
            state.products = [];
        },
        [getAllProducts.fulfilled]: (state, action) =>
        {
            state.status = 'succeeded';
            state.products = action.payload.data;
        },
        [getAllProducts.rejected]: (state, action) =>
        {
            state.status = 'failed';
            state.products = [];
        }
    }
});
export const { actions, reducer } = getAllProductsSlice;