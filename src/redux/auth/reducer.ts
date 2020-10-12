import * as types from "./types";

interface AuthState {
    loggedIn?: boolean;
}

const AuthInitialState: AuthState = {
    loggedIn: undefined,
};

const reducer = (
    state = AuthInitialState,
    action: types.AuthAction
): AuthState => {
    switch (action.type) {
        case types.LOGGED_IN:
            return { ...state, loggedIn: true };
        case types.LOGGED_OUT:
            return { ...state, loggedIn: false };
        default:
            return state;
    }
};

export default reducer;
