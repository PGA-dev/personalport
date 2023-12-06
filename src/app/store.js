import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { referencesReducer } from '../features/siteReference/siteReferenceSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    references: referencesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
