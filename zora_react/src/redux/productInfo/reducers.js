import { LOAD_ITEMS_SUCCESS, LOAD_ITEMS_FAILURE } from './actions';

const initialState = {
    info: []
}

export function productInfoReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                info: action.key
            }
        case LOAD_ITEMS_FAILURE:
            return state;

        default:
            return state;
    }
}