import { Action } from "redux";
import { Game } from "model/Game";

export const LOAD_GAMES_SUCCESS = "LOAD_GAMES_SUCCESS";
interface LoadGamesSuccessAction extends Action<typeof LOAD_GAMES_SUCCESS> {
    games: Game[];
}

export const LOAD_GAMES_FAILURE = "LOAD_GAMES_FAILURE";
interface LoadGamesFailureAction extends Action<typeof LOAD_GAMES_FAILURE> {
    error: Error;
}

export type GamesAction = LoadGamesSuccessAction | LoadGamesFailureAction;
