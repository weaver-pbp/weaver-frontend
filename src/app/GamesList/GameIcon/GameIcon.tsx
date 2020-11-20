import React from "react";

import styles from "./GameIcon.module.scss";

interface GameIconProps {
    isSelected: boolean;
    gameName: string;
    select(): void;
}

const GameIcon: React.FC<GameIconProps> = (props) => {
    return (
        <button className={styles["icon-button"]} onClick={props.select}>
            <span className={styles["content"]} tabIndex={-1}>
                <figure className="image is-64x64 m-2">
                    <img
                        className={
                            props.isSelected
                                ? styles["is-active"]
                                : styles["is-inactive"]
                        }
                        src="https://bulma.io/images/placeholders/64x64.png"
                        alt={props.gameName}
                    />
                </figure>
            </span>
            <div className={styles["label"]}>{props.gameName}</div>
        </button>
    );
};

export default GameIcon;
