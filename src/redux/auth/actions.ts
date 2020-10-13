import axios from "axios";
import { Dispatch } from "redux";
import { error } from "redux/error/actions";
import { AppThunk } from "redux/store";
import { Error } from "utils/error";
import * as types from "./types";

export const logIn = (email: string, password: string): AppThunk => async (
    dispatch: Dispatch
) => {
    try {
        await axios.post(
            `${process.env.REACT_APP_BACKEND_HOST}/auth/login`,
            { email, password },
            { withCredentials: true }
        );
        dispatch(loggedIn());
    } catch (e) {
        dispatch(loginFailure(e.response.data));
    }
};

export const register = (
    email: string,
    username: string,
    password: string
): AppThunk => async (dispatch: Dispatch) => {
    try {
        await axios.post(
            `${process.env.REACT_APP_BACKEND_HOST}/auth/register`,
            { email, username, password },
            { withCredentials: true }
        );
        console.log("success??");
        dispatch(loggedIn());
    } catch (e) {
        dispatch(loginFailure(e.response.data));
    }
};

export const checkAuth = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        console.log("checking auth");
        const result = await axios.get(
            `${process.env.REACT_APP_BACKEND_HOST}/auth/check`,
            { withCredentials: true }
        );

        if (result.data) {
            dispatch(loggedIn());
        } else {
            dispatch(loggedOut());
        }
    } catch (e) {
        dispatch(error(e, { type: "CHECK_AUTH" }));
    }
};

const loggedIn = () => ({
    type: types.LOGGED_IN,
});

const loggedOut = () => ({
    type: types.LOGGED_OUT,
});

const loginFailure = (error: Error) => ({
    type: types.LOGIN_FAILURE,
    error,
});
