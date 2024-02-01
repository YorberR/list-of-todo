import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./HideCompleted.css";

function HideCompleted() {
    const {  hide, hideCompleted } = useContext(TodoContext);
    return (
        <div className="HideCompleted">
            <p onClick={hideCompleted}>
                <FontAwesomeIcon icon={hide ? faEye : faEyeSlash} className="fa-regular" /> {hide ? ("Ver") : ("Ocultar")} completadas
            </p>
        </div>
    );
}

export { HideCompleted };