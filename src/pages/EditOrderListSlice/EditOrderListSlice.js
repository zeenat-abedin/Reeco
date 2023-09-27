// editSlice.js
import { createSlice } from '@reduxjs/toolkit';

const EditSlice = createSlice({
    name: 'edit',
    initialState: {
        isEditing: false,
        editedData: [],
    },
    reducers: {
        startEditing: (state, action) => {
            state.isEditing = true;
            state.editedData = action.payload;
        },
        cancelEditing: (state) => {
            state.isEditing = false;
            state.editedData = [];
        },
        updateEditedData: (state, action) => {
            // Update the edited data in the state
            state.editedData = action.payload;
        },
    },
});

export const { startEditing, cancelEditing, updateEditedData } = EditSlice.actions;
export default EditSlice.reducer;
