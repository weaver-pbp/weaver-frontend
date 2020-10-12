import { Action } from "redux";
import * as types from "./types";

interface ErrorState {
    error?: any;
    action?: Action<string>;
}

const ErrorInitialState: ErrorState = {};

const reducer = (state = ErrorInitialState, action: types.ErrorAction) => {
    switch (action.type) {
        case types.ERROR:
            return { ...state, error: action.error, action: action.action };
        default:
            return state;
    }
};

export default reducer;
