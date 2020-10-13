import { Game } from "model/Game";
import React from "react";
import GameIcon from "./GameIcon/GameIcon";
import styles from "./GamesList.module.scss";

import { ReactComponent as FeatherIcon } from "assets/icons/feather.svg";

interface GamesListProps {
    games: Game[];
    selected: number;
    setSelected(selected: number): void;
}

const GamesList: React.FC<GamesListProps> = (props) => {
    return (
        <div className={styles.GamesList}>
            <figure className="image is-64x64 m-2">
                <FeatherIcon className={styles.FeatherIcon} />
            </figure>
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
