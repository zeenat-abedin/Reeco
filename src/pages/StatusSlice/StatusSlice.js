import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    approvedRows: [], // Initialize as an empty array
    missing: [], // Renamed from Missing to lowercase "missing"
    missingUrgent: [] // Renamed from MissingUrgent to lowercase "missingUrgent"
}

const StatusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        addApprovedRow: (state, action) => {
            state.approvedRows.push(action.payload);
        },
        addMissing: (state, action) => { // Renamed from Missing to "addMissing"
            state.missingUrgent.push(action.payload);
        },
        addMissingUrgent: (state, action) => { // Renamed from MissingUrgent to "addMissingUrgent"
            state.missing.push(action.payload);
        },
    },
})

export const { addApprovedRow, addMissing, addMissingUrgent } = StatusSlice.actions;
export default StatusSlice.reducer;
