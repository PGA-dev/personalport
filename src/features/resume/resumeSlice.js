import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dbUrl } from "../../utilities/dbUrl";

export const fetchResume = createAsyncThunk(
    'resume/fetchResume',
    async () => {
        try {
            const response = await fetch(dbUrl + 'resume');
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
    resumeArray: [],
    status: 'idle',
    error: null 
 }
const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchResume.pending, (state) => {
                //loading status
                state.status = 'loading'
            })
            .addCase(fetchResume.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //add references to state
                state.resumeArray = action.payload
            })
            .addCase(fetchResume.rejected, (state, action) => {
                //fetch fail
                state.status = 'failed'
                state.error= action.error.message ? action.error.message : 'Data Fetch failed';
            })
    }
})

export const resumeReducer = resumeSlice.reducer;

export const selectAllResume = (state) => {
    return state.resume.resumeArray;
};
