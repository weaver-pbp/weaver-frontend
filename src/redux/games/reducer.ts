import * as types from "./types";
import { Game } from "model/Game";

interface GamesState {
    games?: Game[];
}

const GamesInitialState: GamesState = {
    games: undefined,
};

const reducer = (
    state = GamesInitialState,
    action: types.GamesAction
): GamesState => {
    switch (action.type) {
        case types.LOAD_GAMES_SUCCESS:
            return { ...state, games: action.games };
        default:
            return state;
    }
};

export default reducer;
