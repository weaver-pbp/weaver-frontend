import * as types from "./types";
import { User } from "model/User";

interface UserState {
    user?: User;
}

const UserInitialState: UserState = {};

const reducer = (
    state = UserInitialState,
    action: types.UserAction
): UserState => {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return { ...state, user: action.user };
        default:
            return state;
    }
};

export default reducer;
