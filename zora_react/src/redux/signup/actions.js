import axios from 'axios';

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

function signUpSuccess() {
    return {
        type: SIGNUP_SUCCESS
    }
}

function signUpFailure() {
    return {
        type: SIGNUP_FAILURE
    }
}

export function signUpAction(
    name,
    email,
    password,
    horoscope
) {

    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API}/api/signup`, {
            name: name,
            email: email,
            password: password,
            horoscope: horoscope
        })
        .then(response => {
            // The back-end will return 'The email already exists.', if the email already exists
            if (response.data === 'The email already exists.') {
                dispatch(signUpFailure())
            } else {
                dispatch(signUpSuccess())
            }
        }).catch(err => console.log("Error: ", err))
            
    }
}