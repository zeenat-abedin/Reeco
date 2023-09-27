import { combineReducers } from 'redux';
import modalReducer from '../pages/ModalSlice/ModalSlice';
import StatusSlice from '../pages/StatusSlice/StatusSlice';
import EditModalSlice from '../pages/EditModalSlice/EditModalSlice';
import OrderSlice from '../pages/OrderSlice/OrderSlice';
import EditOrderListSlice from '../pages/EditOrderListSlice/EditOrderListSlice';

const rootReducer = combineReducers({
    modal: modalReducer,
    status: StatusSlice,
    editModal: EditModalSlice,
    orderList: OrderSlice,
    editOrder: EditOrderListSlice
});

export default rootReducer;
