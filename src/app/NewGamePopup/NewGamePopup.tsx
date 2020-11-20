import axios from "axios";
import Modal from "components/Modal/Modal";
import React from "react";
import { AppDispatch, AppState } from "redux/store";
import * as gameActions from "redux/games/actions";
import { connect } from "react-redux";

interface NewGamePopupProps {
    open: boolean;
    close(): void;
    loadGames(): void;
}

const NewGamePopup: React.FC<NewGamePopupProps> = (props) => {
    const [gameName, setGameName] = React.useState("");
    const [gameNameError, setGameNameError] = React.useState("");

    const validateGameName = () => {
        if (!gameName || gameName.length <= 0) {
            setGameNameError("Game name must not be blank.");
        } else if (gameName.length < 4) {
            setGameNameError("Game name must be more than three characters.");
        } else {
            setGameNameError("");
            return true;
        }
        return false;
    };

    const createNewGame = async () => {
        if (validateGameName()) {
            try {
                console.log("asdf");
                await axios.post(
                    `${process.env.REACT_APP_BACKEND_HOST}/games`,
                    {
                        name: gameName,
                        description: "",
                    },
                    { withCredentials: true }
                );
                props.close();
                props.loadGames();
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <Modal open={props.open} close={props.close}>
            <h1 className="title has-text-centered has-text-weight-bold">
                Create a new game
            </h1>
            <h3 className="subtitle has-text-centered">
                Give your game a name and icon so people can recognize it.
            </h3>
            <div className="field">
                <label htmlFor="game-name" className="label">
                    Game Name
                </label>
                <div className="control">
                    <input
                        type="text"
                        name="game-name"
                        id="game-name"
                        className={`input ${gameNameError && "is-danger"}`}
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                    />
                    {gameNameError && (
                        <p className="help is-danger">{gameNameError}</p>
                    )}
                </div>
            </div>
            <h3 className="subtitle has-text-centered">
                If you&apos;ll be playing with a specific set of rules, let us
                know here.
            </h3>
            <div className="field">
                <label htmlFor="game-system" className="label">
                    System / Rules
                </label>
                <div className="control">
                    <div className="select">
                        <select name="game-system" id="game-system">
                            <option value="">No Ruleset</option>
                            <option value="dnd-5e">
                                Dungeons and Dragons 5th Edition
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field is-clearfix">
                <div className="control is-pulled-right">
                    <button
                        className="button is-primary"
                        onClick={createNewGame}
                    >
                        Create Game
                    </button>
                </div>
            </div>
        </Modal>
    );
};

const mapState = (state: AppState) => ({});
const mapDispatch = (dispatch: AppDispatch) => ({
    loadGames: () => dispatch(gameActions.loadGames()),
});

const connector = connect(mapState, mapDispatch);

export default connector(NewGamePopup);
