import React from "react";

import { store } from "redux/store";
import { Provider } from "react-redux";

import styles from "./App.module.scss";

import GamesList from "./GamesList/GamesList";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className={`${styles.App} flex-row`}>
                <GamesList />
            </div>
        </Provider>
    );
};

export default App;
