import axios from "axios";
import { Game } from "model/Game";
import { Dispatch } from "redux";
import { AppThunk } from "redux/store";
import * as types from "./types";

export const loadGames = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_HOST}/games`,
            { withCredentials: true }
        );

        dispatch(loadGamesSuccess(response.data));
    } catch (e) {
        dispatch(loadGamesFailure(e));
    }
};

const loadGamesSuccess = (games: Game[]): types.GamesAction => ({
    type: types.LOAD_GAMES_SUCCESS,
    games,
});

const loadGamesFailure = (error: Error): types.GamesAction => ({
    type: types.LOAD_GAMES_FAILURE,
    error,
});
