import { LOAD_ITEMS_SUCCESS, LOAD_ITEMS_FAILURE } from './actions'

const initialState = {
  items: []
}

export function productsListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items
      }
    case LOAD_ITEMS_FAILURE:
      return state;

    default:
      return state;
    }
  }