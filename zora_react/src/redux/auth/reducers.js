import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actions';

const initialState = {
    isAuthenticated: localStorage.getItem('token') !== null || false,
};

export function authReducer (state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                loginErrorMessage: 'Incorrect email or password.'
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
        return state;
    }
}