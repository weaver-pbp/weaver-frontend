import { Dispatch } from "redux";
import { AppThunk } from "redux/store";
import * as types from "./types";

export const loadGames = (): AppThunk => async (dispatch: Dispatch) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(loadGamesSuccess());
};

const loadGamesSuccess = (): types.GamesAction => ({
    type: types.LOAD_GAMES_SUCCESS,
    games: [
        { id: 1, name: "Uncharted Waters" },
        { id: 2, name: "LMOP Game" },
        { id: 3, name: "Curse of Strahd" },
        { id: 4, name: "Theros Game" },
    ],
});
