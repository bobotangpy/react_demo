import axios from "axios";

// const { APIPORT, NODE_ENV, NODE_ENV_DEV } = process.env;
// const inDevelopment = NODE_ENV === "development";
// const inStaging = NODE_ENV_DEV === "staging";
// const baseURL = inDevelopment || inStaging ? `http://localhost:${APIPORT}` : "https://zora-2.herokuapp.com";
// const app = axios.create({
//     baseURL,
//     withCredentials: true,
// });

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

export function getHoroscopeItems(horoscope, style) {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_SERVER}/api/clothes/highlights/${horoscope}/${style}`, {
        })
        .then(response => {
            // console.log(response)
            if (response.data == null) {
                dispatch(loadItemsFailure('No response.'))
            } else {
                // console.log(response.data)
                dispatch(loadItemsSuccess(response.data))
            }
        }).catch((e) => {
            console.log('Cannot get items. ' + e)
        })
    }
}

export function getGenderItems(gender, style, type) {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_SERVER}/api/clothes/${gender}/${style}/${type}`, {
        })
        .then(response => {
            // console.log(response)
            if (response.data == null) {
                dispatch(loadItemsFailure('No response.'))
            } else {
                // console.log(response.data)
                dispatch(loadItemsSuccess(response.data))
            }
        }).catch((e) => {
            console.log('Cannot get items. ' + e)
        })
    }
}
