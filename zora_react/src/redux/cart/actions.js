import axios from "axios";

export const ADD_ITEMS_SUCCESS = "ADD_ITEMS_SUCCESS"
export const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS"
export const LOAD_ITEMS_FAILURE = "LOAD_ITEMS_FAILURE"

export function addItemsSuccess(responseData) {
    return {
        type: ADD_ITEMS_SUCCESS,
        message: responseData,
    }
}

export function loadItemsSuccess(responseData) {
    return {
        type: LOAD_ITEMS_SUCCESS,
        cartItems: responseData,
    }
}

export function loadItemsFailure(message) {
    return {
        type: LOAD_ITEMS_FAILURE,
        message: message
    }
}

export function getCartItems(userId) {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_SERVER}/api/cart`, 
            {
                params : { user_id: userId }
            }
        )
            .then(response => {
                // console.log(response)
                if (response.data == null) {
                    dispatch(loadItemsFailure('No response.'))
                } else {
                    // console.log(response.data)
                    dispatch(loadItemsSuccess(response.data))
                }
            }).catch((e) => {
                console.log('Cannot get cart items. ' + e)
            })
    }
}

export function addToCart(id, qty, size, userId) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/cart`, 
            {
                clothes_id: id,
                quantity: qty,
                size: size,
                user_id: userId,
            }
        )
            .then(response => {
                // console.log(response)
                if (response.data == null) {
                    dispatch(loadItemsFailure('No response.'))
                } else {
                    console.log(response.data)
                    dispatch(addItemsSuccess(response.data))
                }
            }).catch((e) => {
                console.log('Cannot add items to cart. ' + e)
            })
    }
}