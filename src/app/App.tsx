import React from "react";

import { store } from "redux/store";
import { Provider } from "react-redux";

import GamesList from "./GamesList/GamesList";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="columns">
                <GamesList />
            </div>
        </Provider>
    );
};

export default App;
