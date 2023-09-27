// modalSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isEditModalOpen: false,
};

const EditModalSlice = createSlice({
    name: 'editmodal',
    initialState,
    reducers: {
        openModalEdit: (state) => {
            state.isEditModalOpen = true;
        },
        closeModalEdit: (state) => {
            state.isEditModalOpen = false;
        },
    },
});

export const { openModalEdit, closeModalEdit } = EditModalSlice.actions;


export default EditModalSlice.reducer;
