import React from "react";
import { connect } from "react-redux";
import { AppDispatch, AppState } from "redux/store";
import * as authActions from "redux/auth/actions";
import styles from "./Register.module.scss";
import { Redirect } from "react-router-dom";
import useLoggedIn from "hooks/loggedIn";
import { Error, ErrorCode } from "utils/error";

interface RegisterProps {
    loginError?: Error;
    register(email: string, username: string, password: string): void;
}

const Register: React.FC<RegisterProps> = (props) => {
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const isLoggedIn = useLoggedIn() ?? false;
    if (isLoggedIn) {
        return <Redirect to="/app" />;
    }

    const isEmailError =
        props.loginError && props.loginError.code === ErrorCode.EMAIL_IN_USE;
    const isUsernameError = false;
    const isPasswordError = false;

    const tryRegister = () => {
        props.register(email, username, password);
    };

    return (
        <div className={styles.Register}>
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
                    <label htmlFor="username" className="label">
                        Username
                    </label>
                    <input
                        name="username"
                        type="text"
                        className="input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
            <div className="field">
                <div className="control">
                    <button className="button" onClick={tryRegister}>
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapState = (state: AppState) => ({
    loginError: state.auth.loginError,
});

const mapDispatch = (dispatch: AppDispatch) => ({
    register: (email: string, username: string, password: string) =>
        dispatch(authActions.register(email, username, password)),
});

const connector = connect(mapState, mapDispatch);

export default connector(Register);
