import axios from "axios";

export const ADD_ITEMS_SUCCESS = "ADD_ITEMS_SUCCESS"
export const LOAD_CARTITEMS_SUCCESS = "LOAD_CARTITEMS_SUCCESS"
export const LOAD_CARTITEMS_FAILURE = "LOAD_CARTITEMS_FAILURE"

export function addItemsSuccess(responseData) {
    return {
        type: ADD_ITEMS_SUCCESS,
        message: responseData,
    }
}

export function loadCartItemsSuccess(responseData) {
    return {
        type: LOAD_CARTITEMS_SUCCESS,
        cartItems: responseData,
    }
}

export function loadCartItemsFailure(message) {
    return {
        type: LOAD_CARTITEMS_FAILURE,
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
                    dispatch(loadCartItemsFailure('No response.'))
                } else {
                    // console.log(response.data)
                    dispatch(loadCartItemsSuccess(response.data))
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
                    dispatch(loadCartItemsFailure('No response.'))
                } else {
                    console.log(response.data)
                    dispatch(addItemsSuccess(response.data))
                }
            }).catch((e) => {
                console.log('Cannot add items to cart. ' + e)
            })
    }
}