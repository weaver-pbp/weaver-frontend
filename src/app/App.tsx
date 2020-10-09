import React from "react";

import { connect } from "react-redux";

import styles from "./App.module.scss";

import GamesList from "./GamesList/GamesList";
import { Game } from "model/Game";

import { AppDispatch, AppState } from "redux/store";
import * as gamesActions from "redux/games/actions";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

interface AppProps {
    games?: Game[];
    loadGames(): void;
}

const App: React.FC<AppProps> = (props) => {
    const [selectedGame, setSelectedGame] = React.useState(0);

    if (!props.games) {
        props.loadGames();
        return <LoadingScreen />;
    }

    return (
        <div className={`${styles.App} flex-row`}>
            <GamesList
                games={props.games}
                selected={selectedGame}
                setSelected={setSelectedGame}
            />
        </div>
    );
};

const mapState = (state: AppState) => ({
    games: state.games.games,
});

const mapDispatch = (dispatch: AppDispatch) => ({
    loadGames: () => dispatch(gamesActions.loadGames()),
});

const connector = connect(mapState, mapDispatch);

export default connector(App);
