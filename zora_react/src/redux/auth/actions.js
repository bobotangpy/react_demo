import axios from 'axios';

//Action declaration for LOGIN_SUCCESS and Action creator 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginFailure(message) {
    return {
        type: LOGIN_FAILURE,
        message: message
    }
}

function logoutAction() {
    return {
        type: LOGOUT
    }
}

export function loginUser(email, password) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/login`,
            {
                email: email,
                password: password
            }).then(response => {
                if (response.data == null) {
                    dispatch(loginFailure('UnKnown Error'));
                } else if (!response.data.token) {
                    dispatch(loginFailure(response.data.message || "No Token generated?"))
                } else {
                    localStorage.setItem('token', response.data.token);
                    dispatch(loginSuccess());
                }
            });
    };
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch(logoutAction());
    };
}