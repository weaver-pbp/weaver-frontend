import React from "react";

import { connect } from "react-redux";

import styles from "./App.module.scss";

import GamesList from "./GamesList/GamesList";
import { Game } from "model/Game";

import { AppDispatch, AppState } from "redux/store";
import * as authActions from "redux/auth/actions";
import * as userActions from "redux/user/actions";
import * as gamesActions from "redux/games/actions";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import { User } from "model/User";
import { Redirect } from "react-router-dom";

interface AppProps {
    isLoggedIn?: boolean;
    user?: User;
    games?: Game[];
    checkAuth(): void;
    getUser(): void;
    loadGames(): void;
}

const App: React.FC<AppProps> = (props) => {
    const [selectedGame, setSelectedGame] = React.useState(0);

    if (props.isLoggedIn === undefined) {
        props.checkAuth();
        return <LoadingScreen />;
    } else if (props.isLoggedIn === false) {
        return <Redirect to="/login" />;
    }

    if (!props.user) {
        props.getUser();
        return <LoadingScreen />;
    }

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
    isLoggedIn: state.auth.loggedIn,
    user: state.user.user,
    games: state.games.games,
});

const mapDispatch = (dispatch: AppDispatch) => ({
    checkAuth: () => dispatch(authActions.checkAuth()),
    getUser: () => dispatch(userActions.getUser()),
    loadGames: () => dispatch(gamesActions.loadGames()),
});

const connector = connect(mapState, mapDispatch);

export default connector(App);
