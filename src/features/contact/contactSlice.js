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
);


/* post only needed if we do feedback form*/ 
// export const postContact = createAsyncThunk(
//     'contact/postContact',
//     async (contact, { dispatch }) => {
//       try {
        
//         const response = await fetch(dbUrl + 'contact', {
//           method: 'POST',
//           body: JSON.stringify(contact),
//           headers: { 'Content-Type': 'application/json' }
//         });
//         if (!response.ok) {
//           throw new Error('Unable to post, status: ' + response.status);
//         }
//         const data = await response.json();
//         dispatch(addContact(data));
//       } catch (error) {
//           return Promise.reject('Data Post failed: ' + error.message);
//       }
//     }
//   );

  const contactSlice = createSlice({
    name: 'contact',
    initialState: {
      contactArray: [],
      isLoading: true,
      errMsg: ''
    },
    reducers: {
    //   addContact: (state, action) => {
    //     const newContact = {
    //       id: state.contactArray.length + 1,
    //       ...action.payload
    //     };
    //     state.contactArray.push(newContact);
    //   }
    },
    extraReducers: {
      [fetchContact.pending]: (state) => {
        state.isLoading = true;
      },
      [fetchContact.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.errMsg = '';
        state.contactArray = action.payload;
      },
      [fetchContact.rejected]: (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : 'Fetch failed';
      },
    //   [postContact.rejected]: (state, action) => {
    //     alert(
    //       'Sorry, your contact feedback message could not be posted\nError: ' +
    //       (action.error ? action.error.message : 'Post failed')
    //     );
    //   }
    }
  });
  
//   export const { addContact } = contactSlice.actions;

  export const contactReducer = contactSlice.reducer;

  export const selectAllContact = (state) => {
    return state.contact.contactArray;
  };
  