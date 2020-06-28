import axios from "axios";

export const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS"
export const LOAD_ITEMS_FAILURE = "LOAD_ITEMS_FAILURE"

export function loadItemsSuccess(responseData) {
    return {
        type: LOAD_ITEMS_SUCCESS,
        items: responseData
    }
}

export function loadItemsFailure(message) {
    return {
        type: LOAD_ITEMS_FAILURE,
        message: message
    }
}

export function getProductsList(type, style) {
    return (dispatch) => {
        console.log("dispatch")
        return axios.get(`${process.env.REACT_APP_API_SERVER}/api/clothes`, {
            params: { gender_id: 1, style_id: style, type_id: type },
            // headers: { "Authorization": `Bearer ${token}` }
        }).then(response => {
            console.log(response)
            if (response.data == null) {
                dispatch(loadItemsFailure('No response.'))
            } else {
                dispatch(loadItemsSuccess(response.data))
            }
        }).catch((e) => {
            console.log('Cant get items.' + e)
        })
    }

}