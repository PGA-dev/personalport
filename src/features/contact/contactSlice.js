import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dbUrl } from "../../utilities/dbUrl";

export const fetchContact = createAsyncThunk(
    'contact/fetchContact',
    async () => {
        try {
            /*basic db fetch */
            const response = await fetch(dbUrl + 'contact');
            if (!response.ok) {
              throw new Error('Unable to fetch, status: ' + response.status);
            }
            return await response.json();
          } catch (error) {
              return Promise.reject('Fetch failed: ' + error.message);
          }
    }
)