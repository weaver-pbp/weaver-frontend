export const LOGGED_IN = "LOGGED_IN";
interface LoggedInAction {
    type: typeof LOGGED_IN;
}

export const LOGGED_OUT = "LOGGED_OUT";
interface LoggedOutAction {
    type: typeof LOGGED_OUT;
}

export type AuthAction = LoggedInAction | LoggedOutAction;
