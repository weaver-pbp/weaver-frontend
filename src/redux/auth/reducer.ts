import * as types from "./types";
import { Error } from "utils/error";

interface AuthState {
    loggedIn?: boolean;
    loginError?: Error;
}

const AuthInitialState: AuthState = {
    loggedIn: undefined,
    loginError: undefined,
};

const reducer = (
    state = AuthInitialState,
    action: types.AuthAction
): AuthState => {
    switch (action.type) {
        case types.LOGGED_IN:
            return { loggedIn: true };
        case types.LOGGED_OUT:
            return { loggedIn: false };
        case types.LOGIN_FAILURE:
            return { loggedIn: false, loginError: action.error };
        default:
            return state;
    }
};

export default reducer;
