import { User } from "model/User";

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
interface GetUserSuccessAction {
    type: typeof GET_USER_SUCCESS;
    user: User;
}

export type UserAction = GetUserSuccessAction;
