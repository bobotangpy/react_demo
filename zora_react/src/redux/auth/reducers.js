import { LOGIN_SUCCESS, LOGOUT } from './actions';

const initialState = {
    isAuthenticated: localStorage.getItem('token') !== null || false,
    // horoscope: "",
    // user_id: ""
};

export function authReducer (state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            // horoscope: action.horoscope,
            // user_id: action.user_id
        };
        case LOGOUT:
        return {
            ...state,
            isAuthenticated: false,
            // horoscope: "",
            // user_id: ""
        };
        default:
        return state;
    }
}