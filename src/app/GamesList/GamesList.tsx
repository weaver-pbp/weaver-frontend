import React from "react";
import GameIcon from "./GameIcon/GameIcon";
import "./GamesList.scss";

const GamesList: React.FC = () => {
    return (
        <div className="column is-narrow">
            <GameIcon gameName="Uncharted Waters" />
        </div>
    );
};

export default GamesList;
