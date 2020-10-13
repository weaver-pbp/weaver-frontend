import useLoggedIn from "hooks/loggedIn";
import React from "react";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
    const isLoggedIn = useLoggedIn() ?? false;

    return (
        <div className="app">
            <nav
                className="navbar is-dark"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <div className="navbar-item is-size-4">Weaver</div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item">Home</div>
                            <div className="navbar-item">About</div>
                            <div className="navbar-item">Contact</div>
                        </div>
                        <div className="navbar-end">
                            {isLoggedIn ? (
                                <div className="navbar-item">
                                    <Link
                                        to="/app"
                                        className="button is-primary"
                                    >
                                        Go to App
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <div className="navbar-item">
                                        <Link
                                            to="/login"
                                            className="button is-primary"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                    <div className="navbar-item">
                                        <Link
                                            to="/register"
                                            className="button is-primary"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Homepage;
