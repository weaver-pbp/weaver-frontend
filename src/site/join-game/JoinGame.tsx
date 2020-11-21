import LoadingScreen from "app/LoadingScreen/LoadingScreen";
import axios from "axios";
import { Game } from "model/Game";
import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import styles from "./JoinGame.module.scss";

const JoinGame: React.FC = () => {
    const { token } = useParams<{ token: string }>();

    const [game, setGame] = useState<Game>();
    const [redirectToLogin, setRedirectToLogin] = useState<boolean>();
    const [redirectToApp, setRedirectToApp] = useState<boolean>();

    useEffect(() => {
        const getGame = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_HOST}/games/withToken/${token}`,
                    { withCredentials: true }
                );

                setGame(response.data as Game);
            } catch (e) {
                if (e.response.status === 401) {
                    setRedirectToLogin(true);
                }
            }
        };

        getGame();
    }, [token]);

    const joinGame = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_HOST}/games/withToken/${token}/join`,
                {},
                { withCredentials: true }
            );

            setRedirectToApp(true);
        } catch (e) {
            if (e.response.status === 401) {
                setRedirectToLogin(true);
            }
        }
    };

    if (redirectToLogin) {
        return <Redirect to="/login" />;
    }

    if (redirectToApp) {
        return <Redirect to="/app" />;
    }

    if (!game) {
        return <LoadingScreen />;
    }

    return (
        <div className={styles.container}>
            <h1 className="title is-size-2 has-text-centered">{game.name}</h1>
            <p className="is-italic is-size-5">
                {game.description
                    ? game.description
                    : "This game has no description."}
            </p>
            <br />
            <div className="field">
                <button
                    className="button is-primary is-large is-fullwidth"
                    onClick={joinGame}
                >
                    <p className="is-size-3">Join Game</p>
                </button>
            </div>
        </div>
    );
};

export default JoinGame;
