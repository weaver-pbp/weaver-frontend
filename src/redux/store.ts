import { createStore, applyMiddleware, Action } from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";

import { reducer } from "./reducer";

export type AppState = ReturnType<typeof reducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    undefined,
    Action<string>
>;
export type AppDispatch = ThunkDispatch<AppState, undefined, Action>;

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
