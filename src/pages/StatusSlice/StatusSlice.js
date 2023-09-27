import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    approvedRows: [], 
    missing: [], 
    missingUrgent: []
}

const StatusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        addApprovedRow: (state, action) => {
            state.approvedRows.push(action.payload);
        },
        addMissing: (state, action) => { 
            state.missingUrgent.push(action.payload);
        },
        addMissingUrgent: (state, action) => {
            state.missing.push(action.payload);
        },
    },
})

export const { addApprovedRow, addMissing, addMissingUrgent } = StatusSlice.actions;
export default StatusSlice.reducer;
