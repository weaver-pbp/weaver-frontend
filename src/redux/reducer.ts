import { combineReducers } from "redux";

import error from "./error/reducer";
import auth from "./auth/reducer";
import user from "./user/reducer";
import games from "./games/reducer";

export const reducer = combineReducers({ error, auth, user, games });
