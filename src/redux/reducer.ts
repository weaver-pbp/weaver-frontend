import { combineReducers } from "redux";

import games from "./games/reducer";

export const reducer = combineReducers({ games });
