import { User } from "model/User";
import { Dispatch } from "redux";
import { AppThunk } from "redux/store";
import * as types from "./types";
import axios from "axios";
import { error } from "redux/error/actions";

export const getUser = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        const result = await axios.get(
            `${process.env.REACT_APP_BACKEND_HOST}/user/me`,
            { withCredentials: true }
        );
        dispatch(getUserSuccess(result.data));
    } catch (e) {
        dispatch(error(e, { type: "GET_USER" }));
    }
};

const getUserSuccess = (user: User) => ({
    type: types.GET_USER_SUCCESS,
    user: user,
});
