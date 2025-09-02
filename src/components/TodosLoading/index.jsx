import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
    return (
        <div className="TodosLoading">
            <div className="TodosLoading-skeleton">
                <div className="TodosLoading-checkbox"></div>
                <div className="TodosLoading-text"></div>
                <div className="TodosLoading-actions">
                    <div className="TodosLoading-action"></div>
                    <div className="TodosLoading-action"></div>
                    <div className="TodosLoading-action"></div>
                </div>
            </div>
        </div>
    );
}

export { TodosLoading };