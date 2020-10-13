import React from "react";
import { connect } from "react-redux";
import { AppDispatch, AppState } from "redux/store";
import * as authActions from "redux/auth/actions";
import styles from "./Login.module.scss";
import { Redirect } from "react-router-dom";
import useLoggedIn from "hooks/loggedIn";

interface LoginProps {
    isLoggedIn?: boolean;
    login(email: string, password: string): void;
}

const Login: React.FC<LoginProps> = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const isLoggedIn = useLoggedIn() ?? false;
    if (isLoggedIn) {
        return <Redirect to="/app" />;
    }

    const tryLogin = () => {
        props.login(email, password);
    };

    return (
        <div className={styles.Login}>
            <div className="field">
                <div className="control">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        name="email"
                        type="text"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button" onClick={tryLogin}>
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapState = (state: AppState) => ({
    isLoggedIn: state.auth.loggedIn,
});

const mapDispatch = (dispatch: AppDispatch) => ({
    login: (email: string, password: string) =>
        dispatch(authActions.logIn(email, password)),
});

const connector = connect(mapState, mapDispatch);

export default connector(Login);
