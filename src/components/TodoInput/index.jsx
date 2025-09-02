import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoInput.css';

function TodoInput() {
    const [inputValue, setInputValue] = React.useState('');
    const { addTodo } = React.useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="TodoInput">
            <form onSubmit={handleSubmit} className="TodoInput-form">
                <input
                    type="text"
                    className="TodoInput-field"
                    placeholder="Agregar nueva tarea..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    maxLength={200}
                />
                <button 
                    type="submit" 
                    className="TodoInput-button"
                    disabled={!inputValue.trim()}
                >
                    + Agregar Tarea
                </button>
            </form>
        </div>
    );
}

export { TodoInput };