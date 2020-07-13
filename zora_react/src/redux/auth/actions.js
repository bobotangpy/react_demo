import axios from 'axios';

//Action declaration for LOGIN_SUCCESS and Action creator 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

function loginSuccess(id, horoscope) {
    return {
        type: LOGIN_SUCCESS,
        // user_id: id,
        // horoscope: horoscope
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
            }
            ).then(response => {
                if (response.data == null) {
                    dispatch(loginFailure('UnKnown Error'));
                } else if (!response.data.token) {
                    dispatch(loginFailure(response.data.message || "No Token generated?"))
                } else {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('user_id', response.data.id);
                    localStorage.setItem('horoscope', response.data.horoscope);
                    let user_id = response.data.id;
                    let horoscope = response.data.horoscope;
                    dispatch(loginSuccess(user_id, horoscope));
                }
            });
    };
}

export function logout() {
    return (dispatch) => {
        console.log('logging out action')
        localStorage.clear();
        // localStorage.clear('id');
        // localStorage.clear('horoscope');
        dispatch(logoutAction());
    };
}