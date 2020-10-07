import React from "react";

const Homepage: React.FC = () => {
    return (
        <div className="app">
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item is-size-4">Weaver</a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item">Home</a>
                            <a className="navbar-item">About</a>
                            <a className="navbar-item">Contact</a>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">Contact</div>
                            <div className="navbar-item">About</div>
                            <div className="navbar-item">Home</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Homepage;
