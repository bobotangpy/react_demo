import { ADD_ITEMS_SUCCESS, LOAD_ITEMS_SUCCESS, LOAD_ITEMS_FAILURE } from './actions';

const initialState = {
    message: "",
    cartItems: []
}

export function cartItemsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEMS_SUCCESS:
            return {
                ...state,
                message: action.message.status
            }
        case LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                cartItems: action.cartItems
            }
        case LOAD_ITEMS_FAILURE:
            return state;

        default:
            return state;
    }
}