import { LOAD_ITEMS_SUCCESS, LOAD_ITEMS_FAILURE } from './actions';

const initialState = {
    suggestions: []
}

export function suggestionsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                suggestions: action.info
            }
        case LOAD_ITEMS_FAILURE:
            return state;

        default:
            return state;
    }
}