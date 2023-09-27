import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    OrderList: [],
}

const OrderListSheetSlice = createSlice({
    name: "orderList",
    initialState,
    reducers: {
        addOrderList: (state, action) => {
            state.OrderList = action.payload
        }
    }
})

export const { addOrderList } = OrderListSheetSlice.actions;
export default OrderListSheetSlice.reducer