import React from "react";

interface GameIconProps {
    gameName: string;
}

const GameIcon: React.FC<GameIconProps> = (props) => {
    return (
        <figure className="image is-64x64 m-2">
            <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
                alt={props.gameName}
            />
        </figure>
    );
};

export default GameIcon;
