import { Action } from "redux";
import * as types from "./types";

export const error = (
    error: any,
    action: Action<string>
): types.ErrorAction => ({
    type: types.ERROR,
    error,
    action,
});
