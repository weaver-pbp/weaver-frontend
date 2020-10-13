import { Error } from "utils/error";

export const LOGGED_IN = "LOGGED_IN";
interface LoggedInAction {
    type: typeof LOGGED_IN;
}

export const LOGGED_OUT = "LOGGED_OUT";
interface LoggedOutAction {
    type: typeof LOGGED_OUT;
}

export const LOGIN_FAILURE = "LOGIN_FAILURE";
interface LoginFailure {
    type: typeof LOGIN_FAILURE;
    error: Error;
}

export type AuthAction = LoggedInAction | LoggedOutAction | LoginFailure;
