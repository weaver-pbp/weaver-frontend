import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Homepage from "site/homepage/Homepage";
import App from "app/App";
import * as serviceWorker from "./serviceWorker";

import { store } from "redux/store";
import { Provider } from "react-redux";

import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/app">
                    <Provider store={store}>
                        <App />
                    </Provider>
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
