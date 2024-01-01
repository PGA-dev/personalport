import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dbUrl } from "../../utilities/dbUrl";

export const fetchHistory = createAsyncThunk(
    'history/fetchHistory',
    async () => {
        try {
            const response = await fetch(dbUrl + 'history');
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
    historyArray: [],
    status: 'idle',
    error: null 
 }
const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchHistory.pending, (state,action) => {
                //loading status
                state.status = 'loading'
            })
            .addCase(fetchHistory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //add references to state
                state.historyArray = action.payload
            })
            .addCase(fetchHistory.rejected, (state, action) => {
                //fetch fail
                state.status = 'failed'
                state.error= action.error.message ? action.error.message : 'Data Fetch failed';
            })
    }
})

export const historyReducer = historySlice.reducer;

export const selectAllHistory = (state) => {
    return state.history.historyArray;
};
