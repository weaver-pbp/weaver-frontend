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
import Login from "site/login/Login";
import Register from "site/register/Register";
import * as serviceWorker from "./serviceWorker";

import { store } from "redux/store";
import { Provider } from "react-redux";

import "./index.scss";
import JoinGame from "site/join-game/JoinGame";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/app">
                        <App />
                    </Route>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/join/:token">
                        <JoinGame />
                    </Route>
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
