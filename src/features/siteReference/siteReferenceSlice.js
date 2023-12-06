import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dbUrl } from "../../utilities/dbUrl";

export const fetchSiteReferences = createAsyncThunk(
    'references/fetchSiteReferences',
    async () => {
        try {
            const response = await fetch(dbUrl + 'references');
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
    referencesArray: [],
    status: 'idle',
    error: null 
 }
const referencesSlice = createSlice({
    name: 'references',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSiteReferences.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(fetchSiteReferences.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //add references to state
                state.referencesArray = action.payload
            })
            .addCase(fetchSiteReferences.rejected, (state, action) => {
                state.status = 'failed'
                state.error= action.error.message ? action.error.message : 'Data Fetch failed';
            })
    }
})

export const referencesReducer = referencesSlice.reducer;

export const selectAllReferences = (state) => {
    return state.references.referencesArray;
};
