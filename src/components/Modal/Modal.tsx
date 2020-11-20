import React from "react";

interface ModalProps {
    open: boolean;
    close(): void;
}

const Modal: React.FC<ModalProps> = (props) => {
    React.useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const elementsToExclude = ["input", "textarea"];
            if (
                e.key === "Escape" &&
                elementsToExclude.indexOf((e.target as HTMLElement).tagName) ===
                    -1
            ) {
                props.close();
            }
        };

        document.body.addEventListener("keydown", handleKeyPress);

        return () => {
            document.body.removeEventListener("keydown", handleKeyPress);
        };
    });

    return (
        <div
            className={`modal ${props.open && "is-active"}`}
            role="presentation"
            tabIndex={-1}
            onClick={props.close}
        >
            <div className="modal-background" />
            <div
                role="presentation"
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="box">{props.children}</div>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={props.close}
            />
        </div>
    );
};

export default Modal;
