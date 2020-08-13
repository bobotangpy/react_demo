import axios from "axios";

export const LOAD_ORDERITEMS_SUCCESS = "LOAD_ORDERITEMS_SUCCESS"
export const LOAD_ORDERITEMS_FAILURE = "LOAD_ORDERITEMS_FAILURE"
export const ADD_ORDERITEMS_SUCCESS = "ADD_ORDERITEMS_SUCCESS"
export const ADD_ORDERITEMS_FAILURE = "ADD_ORDERITEMS_FAILURE"

export function loadOrderItemsSuccess(responseData) {
    return {
        type: LOAD_ORDERITEMS_SUCCESS,
        orderItems: responseData,
    }
}

export function loadOrderItemsFailure(message) {
    return {
        type: LOAD_ORDERITEMS_FAILURE,
        message: message,
    }
}

export function addOrderItemsSuccess(responseData) {
    return {
        type: ADD_ORDERITEMS_SUCCESS,
        message: responseData,
    }
}

export function addOrderItemsFailure(message) {
    return {
        type: ADD_ORDERITEMS_FAILURE,
        message: message,
    }
}

export function getOrderItems(userId) {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_SERVER}/api/orderHistory/${userId}`)
        .then(response => {
            if (response.data == null) {
                dispatch(loadOrderItemsFailure('No response.'))
            } else {
                console.log(response.data)
                dispatch(loadOrderItemsSuccess(response.data))
            }
        }).catch((e) => {
            console.log('Cannot get order history. ' + e)
        })
    }
}

export function addOrderItems(userId) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/orderHistory`, 
        {
            user_id: userId
        })
        .then(response => {
            if (response.data == null) {
                dispatch(addOrderItemsFailure('No response.'))
            } else {
                console.log(response.data)
                dispatch(addOrderItemsSuccess(response.data))
            }
        }).catch((e) => {
            console.log('Cannot add to order history. ' + e)
        })
    }
}