import axios from "axios";

export const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS"
export const LOAD_ITEMS_FAILURE = "LOAD_ITEMS_FAILURE"

export function loadItemsSuccess(responseData) {
    return {
        type: LOAD_ITEMS_SUCCESS,
        suggestions: responseData
    }
}

export function loadItemsFailure(message) {
    return {
        type: LOAD_ITEMS_FAILURE,
        message: message
    }
}

export function getSuggestions(horoscope, gender, type) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/suggestion/${horoscope}/${gender}/${type}`, 
        // {
        //     params: {
        //         horoscope: horoscope,
        //         gender: gender
        //     }
        // }
            )
            .then(response => {
                if (response.data == null) {
                    dispatch(loadItemsFailure('No response.'))
                } else {
                    // console.log(response.data)
                    dispatch(loadItemsSuccess(response.data))
                }
            }).catch((e) => {
                console.log('Cannot get suggestions. ' + e)
            })
    }
}