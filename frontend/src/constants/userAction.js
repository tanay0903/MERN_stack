import axios from "axios";
import { 
    LOGIN_REQUEST, 
    LOGIN_FAIL, 
    LOGIN_SUCCESS 
} from "../constants/userConstant";

// User Action
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`/api/v1/users/me`);

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};


// Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "/api/v1/users/login", 
            { email, password }, 
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data.user,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Login Failed",
        });
    }
};

// Logout action
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/users/logout`);

        dispatch({
            type: LOGOUT_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERROR,
    });
};
