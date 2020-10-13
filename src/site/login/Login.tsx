import React from "react";
import { connect } from "react-redux";
import { AppDispatch, AppState } from "redux/store";
import * as authActions from "redux/auth/actions";
import styles from "./Login.module.scss";
import { Link, Redirect } from "react-router-dom";
import useLoggedIn from "hooks/loggedIn";
import { Error, ErrorCode } from "utils/error";

interface LoginProps {
    loginError?: Error;
    login(email: string, password: string): void;
}

const Login: React.FC<LoginProps> = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const isLoggedIn = useLoggedIn() ?? false;
    if (isLoggedIn) {
        return <Redirect to="/app" />;
    }

    const isEmailError =
        props.loginError && props.loginError.code === ErrorCode.USER_NOT_FOUND;
    const isPasswordError =
        props.loginError &&
        props.loginError.code === ErrorCode.PASSWORD_INCORRECT;

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
                        className={"input" + (isEmailError ? " is-danger" : "")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {isEmailError && (
                        <p className="help is-danger">
                            {props.loginError?.message}
                        </p>
                    )}
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
                        className={
                            "input" + (isPasswordError ? " is-danger" : "")
                        }
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isPasswordError && (
                        <p className="help is-danger">
                            {props.loginError?.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button" onClick={tryLogin}>
                        Log In
                    </button>
                </div>
                <div className="control">
                    <Link to="/register" className="button is-text">
                        or Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapState = (state: AppState) => ({
    loginError: state.auth.loginError,
});

const mapDispatch = (dispatch: AppDispatch) => ({
    login: (email: string, password: string) =>
        dispatch(authActions.logIn(email, password)),
});

const connector = connect(mapState, mapDispatch);

export default connector(Login);
