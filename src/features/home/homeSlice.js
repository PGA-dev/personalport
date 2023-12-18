import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dbUrl } from "../../utilities/dbUrl";

export const fetchHome = createAsyncThunk(
    '/fetchHome',
    async () => {
        try {
            const response = await fetch(dbUrl + '/');
            if (!response.ok){
                throw new Error('Unable to fetch, status: ' + response.status + response.url);
            }
            return await response.json();
        } catch (error){
            return Promise.reject('Data fetch failed: ' + error.message);
        }
    }
);
const initialState = {
    homeArray: [],
    status: 'idle',
    error: null 
 }
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchHome.pending, (state) => {
                //loading status
                state.status = 'loading'
            })
            .addCase(fetchHome.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //add references to state
                state.homeArray = action.payload
            })
            .addCase(fetchHome.rejected, (state, action) => {
                //fetch fail
                state.status = 'failed'
                state.error= action.error.message ? action.error.message : 'Data Fetch failed';
            })
    }
})

export const homeReducer = homeSlice.reducer;

export const selectAllHome = (state) => {
    return state.home.homeArray;
};