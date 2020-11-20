import React from "react";

import styles from "./WeaverIcon.module.scss";

import { ReactComponent as FeatherIcon } from "assets/icons/feather.svg";

interface WeaverIconProps {
    onClick(): void;
}

const WeaverIcon: React.FC<WeaverIconProps> = (props) => {
    return (
        <button className={styles["icon-button"]} onClick={props.onClick}>
            <span className={styles["content"]} tabIndex={-1}>
                <figure className="image is-64x64 m-2">
                    <FeatherIcon className={styles.FeatherIcon} />
                </figure>
            </span>
            <div className={styles["label"]}>New Game</div>
        </button>
    );
};

export default WeaverIcon;
