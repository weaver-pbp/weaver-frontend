import { Action } from "redux";

export const ERROR = "ERROR";
export interface ErrorAction extends Action<typeof ERROR> {
    type: typeof ERROR;
    error: any;
    action: Action<string>;
}
