import { Action } from "redux";
import { Game } from "model/Game";

export const LOAD_GAMES_SUCCESS = "LOAD_GAMES_SUCCESS";

interface LoadGamesSuccessAction extends Action<typeof LOAD_GAMES_SUCCESS> {
    games: Game[];
}

export type GamesAction = LoadGamesSuccessAction;
