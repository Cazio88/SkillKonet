import { createSlice } from '@reduxjs/toolkit';

const internshipSlice = createSlice({
  name: 'internships',
  initialState: [],
  reducers: {
    addInternship: (state, action) => {
      state.push(action.payload);
    },
    updateInternship: (state, action) => {
      // Find and update the internship by ID
      const { id, updatedInternship } = action.payload;
      const index = state.findIndex((internship) => internship.id === id);
      if (index !== -1) {
        state[index] = updatedInternship;
      }
    },
    deleteInternship: (state, action) => {
      const { id } = action.payload;
      return state.filter((internship) => internship.id !== id);
    },
  },
});

export const { addInternship, updateInternship, deleteInternship } = internshipSlice.actions;
export default internshipSlice.reducer;