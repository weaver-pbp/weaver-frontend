import React from "react";

import styles from "./LoadingScreen.module.scss";
import { ReactComponent as FeatherIcon } from "assets/icons/feather.svg";

const LoadingScreen: React.FC = () => {
    return (
        <div className={styles.container}>
            <figure className="image is-128x128 m-2">
                <FeatherIcon className={styles.spinner} />
            </figure>
            <div>Loading...</div>
        </div>
    );
};

export default LoadingScreen;
