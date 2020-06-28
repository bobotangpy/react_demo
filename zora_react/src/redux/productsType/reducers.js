const initialState = {
    selectedType: "0"
}

export function productsTypeReducer(state = initialState, action) {
    if(action.type === "UPDATE_TYPE") {
        return {
            ...state,
            selectedType: action.key
        }
    }

    return state;
}