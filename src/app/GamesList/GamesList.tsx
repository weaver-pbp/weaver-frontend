import { Game } from "model/Game";
import React from "react";
import GameIcon from "./GameIcon/GameIcon";
import WeaverIcon from "./WeaverIcon/WeaverIcon";

import styles from "./GamesList.module.scss";

interface GamesListProps {
    games: Game[];
    selected: number;
    setSelected(selected: number): void;
}

const GamesList: React.FC<GamesListProps> = (props) => {
    return (
        <div className={styles.GamesList}>
            <WeaverIcon onClick={() => console.log("Create new game...")} />
            <div className={styles.Divider} />
            {props.games.map((game, idx) => (
                <GameIcon
                    key={game.id}
                    gameName={game.name}
                    isSelected={idx === props.selected}
                    select={() => props.setSelected(idx)}
                />
            ))}
        </div>
    );
};

export default GamesList;
