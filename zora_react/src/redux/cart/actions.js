import axios from "axios";

export const ADD_ITEMS_SUCCESS = "ADD_ITEMS_SUCCESS"
export const REMOVE_ITEM_SUCCESS = "REMOVE_ITEM_SUCCESS"
export const REMOVE_ITEM_FAILURE = "REMOVE_ITEM_FAILURE"
export const LOAD_CARTITEMS_SUCCESS = "LOAD_CARTITEMS_SUCCESS"
export const LOAD_CARTITEMS_FAILURE = "LOAD_CARTITEMS_FAILURE"
export const UPDATE_QTY_SUCCESS = "UPDATE_QTY_SUCCESS"
export const UPDATE_QTY_FAILURE = "UPDATE_QTY_FAILURE"


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

export function addItemsSuccess(responseData) {
    return {
        type: ADD_ITEMS_SUCCESS,
        message: responseData,
    }
}

export function removeItemSuccess(responseData) {
    return {
        type: REMOVE_ITEM_SUCCESS,
        // message: responseData,
    }
}

export function removeItemFailure(message) {
    return {
        type: REMOVE_ITEM_FAILURE,
        message: message
    }
}

export function updateItemSuccess(responseData) {
    return {
        type: UPDATE_QTY_SUCCESS,
        cartItems: responseData,
    }
}

export function updateItemFailure(message) {
    return {
        type: UPDATE_QTY_FAILURE,
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
                if (response.data == null) {
                    dispatch(loadCartItemsFailure('No response.'))
                } else {
                    console.log(response.data)
                    dispatch(addItemsSuccess(response.data))
                    .then(dispatch(getCartItems(userId)))
                }
            }).catch((e) => {
                console.log('Cannot add items to cart. ' + e)
            })
    }
}

export function removeCartItem(id, userId) {
    return (dispatch) => {
        return axios.delete(`${process.env.REACT_APP_API_SERVER}/api/cart`, 
            {
                params : { clothes_id: id, user_id: userId }
            }
        )
        .then(response => {
            if (response.data == null) {
                dispatch(removeItemFailure('No response.'))
            } else {
                // console.log(response.data)
                dispatch(removeItemSuccess(response.data))
                .then(dispatch(getCartItems(userId)))
            }
        }).catch((e) => {
            console.log('Cannot remove item. ' + e)
        })
    }
}

export function updateItemQty(id, qty, size, userId) {
    return (dispatch) => {
        return axios.put(`${process.env.REACT_APP_API_SERVER}/api/cart`, 
        {
            clothes_id: id,
            quantity: qty,
            size: size,
            user_id: userId,
        })
        .then(response => {
            if (response.data == null) {
                dispatch(updateItemFailure('No response.'))
            } else {
                dispatch(updateItemSuccess(response.data))
                .then(dispatch(getCartItems(userId)))
            }
        }).catch((e) => {
            console.log('Cannot update item. ' + e)
        })
    }
}