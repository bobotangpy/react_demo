const initialState = {
    selectedStyle: "0"
}

export function productsStyleReducer(state = initialState, action) {
    if(action.type === "UPDATE_STYLE") {
        return {
            ...state,
            selectedStyle: action.key
        }
    }

    return state;
}