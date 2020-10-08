import React from "react";
import GameIcon from "./GameIcon/GameIcon";
import styles from "./GamesList.module.scss";

const GamesList: React.FC = () => {
    return (
        <div className={styles.GamesList}>
            <GameIcon gameName="Uncharted Waters" />
            <GameIcon gameName="Uncharted Waters" />
            <GameIcon gameName="Uncharted Waters" />
            <GameIcon gameName="Uncharted Waters" />
        </div>
    );
};

export default GamesList;
