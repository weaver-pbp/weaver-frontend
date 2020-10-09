import { Game } from "model/Game";

export const LOAD_GAMES_SUCCESS = "LOAD_GAMES_SUCCESS";

interface LoadGamesSuccessAction {
    type: typeof LOAD_GAMES_SUCCESS;
    games: Game[];
}

export type GamesAction = LoadGamesSuccessAction;
