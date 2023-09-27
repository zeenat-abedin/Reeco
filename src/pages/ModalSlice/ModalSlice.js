// modalSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectIsModalOpen = (state) => state.modal.isModalOpen;

export default modalSlice.reducer;
