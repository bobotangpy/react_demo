import axios from "axios";

export const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS"
export const LOAD_ITEMS_FAILURE = "LOAD_ITEMS_FAILURE"

export function loadItemsSuccess(responseData) {
    return {
        type: LOAD_ITEMS_SUCCESS,
        info: responseData
    }
}

export function loadItemsFailure(message) {
    return {
        type: LOAD_ITEMS_FAILURE,
        message: message
    }
}

export function getProductInfo(id, name) {
    return (dispatch) => {
        return axios.get(`http://localhost:8880/api/productInfo`, {
            params: {
                id: id,
                name: name
            }
        })
            .then(response => {
                // console.log(response)
                if (response.data == null) {
                    dispatch(loadItemsFailure('No response.'))
                } else {
                    console.log(response.data)
                    dispatch(loadItemsSuccess(response.data))
                }
            }).catch((e) => {
                console.log('Cannot get item info. ' + e)
            })
    }
}