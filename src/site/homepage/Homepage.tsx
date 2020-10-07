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
                        <button className="navbar-item is-size-4">
                            Weaver
                        </button>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <button className="navbar-item">Home</button>
                            <button className="navbar-item">About</button>
                            <button className="navbar-item">Contact</button>
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
