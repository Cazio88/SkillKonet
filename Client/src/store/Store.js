// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer  from '../pages/internshipSlice/internshipSlice';
import internshipReducer from '../pages/internshipSlice/internshipSlice';

const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});

export default store;
