import { Action } from "redux";
import * as types from "./types";

interface ErrorState {
    error?: any;
    action?: Action<string>;
}

const ErrorInitialState: ErrorState = {};

const reducer = (
    state = ErrorInitialState,
    action: types.ErrorAction
): ErrorState => {
    switch (action.type) {
        case types.ERROR:
            console.error(action);
            return { ...state, error: action.error, action: action.action };
        default:
            return state;
    }
};

export default reducer;
