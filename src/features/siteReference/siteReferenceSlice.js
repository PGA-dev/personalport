import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dbUrl } from "../../utilities/dbUrl";

export const fetchSiteReference = createAsyncThunk(
    'reference/fetchSiteReference',
    async () => {
        try {
            const response = await fetch(dbUrl + 'referenc');
            if (!response.ok){
                throw new Error('Unable to fetch, status: ' + response.status + response.url);
            }
            return await response.json();
        } catch (error){
            return Promise.reject('Data fetch failed: ' + error.message);
        }
    }
);

const referenceSlice = createSlice({
    name: 'reference',
    initialState: {
       referenceArray: [],
       isLoading: true,
       errorMsg: '' 
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSiteReference.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(fetchSiteReference.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //add references to state
                state.reference = state.reference.concat(action.payload)
            })
            .addCase(fetchSiteReference.rejected, (state, action) => {
                state.status = 'failed'
                state.errorMsg = action.error.message ? action.error.message : 'Data Fetch failed';
            })
    }
})

export const referenceReducer = referenceSlice.reducer;

export const selectAllReference = (state) => {
    return state.reference.referenceArray;
};
