import { ADD_ITEMS_SUCCESS, LOAD_CARTITEMS_SUCCESS, LOAD_CARTITEMS_FAILURE } from './actions';

const initialState = {
    message: "",
    cartItems: []
}

export function cartItemsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEMS_SUCCESS:
            if(action.message === 200) {
                return {
                    ...state,
                    message: "success"
                }
            }
        case LOAD_CARTITEMS_SUCCESS:
            return {
                ...state,
                cartItems: action.cartItems
            }
        case LOAD_CARTITEMS_FAILURE:
            return state;

        default:
            return state;
    }
}