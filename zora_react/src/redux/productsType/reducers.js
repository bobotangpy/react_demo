const initialState = {
    selectedType: "2",
    selectedKey: ""
}

export function productsTypeReducer(state = initialState, action) {
    if (action.type === "UPDATE_TYPE") {
        return {
            ...state,
            selectedType: action.selectedType,
            selectedKey: action.selectedKey
        }
    }

    return state;
}