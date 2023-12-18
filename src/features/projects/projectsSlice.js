import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dbUrl } from "../../utilities/dbUrl";

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async () => {
        try {
            const response = await fetch(dbUrl + 'projects');
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
    projectsArray: [],
    status: 'idle',
    error: null 
 }
const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProjects.pending, (state) => {
                //loading status
                state.status = 'loading'
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //add references to state
                state.projectsArray = action.payload
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                //fetch fail
                state.status = 'failed'
                state.error= action.error.message ? action.error.message : 'Data Fetch failed';
            })
    }
})

export const projectsReducer = projectsSlice.reducer;

export const selectAllProjects = (state) => {
    return state.projects.projectsArray;
};