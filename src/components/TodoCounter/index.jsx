import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    
    const getCurrentDate = () => {
        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return today.toLocaleDateString('es-ES', options);
    };

    return (
        <div className="TodoCounter">
            <h1 className="TodoCounter-title">To-do list</h1>
            <p className="TodoCounter-date">{getCurrentDate()}</p>
        </div>
    );
}

export { TodoCounter };