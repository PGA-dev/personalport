import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { referencesReducer } from '../features/siteReference/siteReferenceSlice';
import { homeReducer } from '../features/home/homeSlice';
import { projectsReducer } from '../features/projects/projectsSlice';
import { resumeReducer } from '../features/resume/resumeSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    projects: projectsReducer,
    resume: resumeReducer,
    counter: counterReducer,
    references: referencesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
