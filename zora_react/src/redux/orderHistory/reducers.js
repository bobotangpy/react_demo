import { LOAD_ORDERITEMS_SUCCESS, LOAD_ORDERITEMS_FAILURE, ADD_ORDERITEMS_SUCCESS, ADD_ORDERITEMS_FAILURE } from './actions';

const initialState = {
    message: "",
    orderItems: []
}

export function orderItemsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ORDERITEMS_SUCCESS:
            return {
                ...state,
                orderItems: action.orderItems
            }
        case LOAD_ORDERITEMS_FAILURE:
            return state;

        case ADD_ORDERITEMS_SUCCESS:
            return {
                ...state,
                message: action.message
            }
        case ADD_ORDERITEMS_FAILURE:
            return state;
            
        default:
            return state;
    }
}