import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoFilters.css';

function TodoFilters() {
    const { filterType, changeFilter, totalTodos, completedTodos } = React.useContext(TodoContext);
    
    const activeTodos = totalTodos - completedTodos;
    
    const filters = [
        { key: 'all', label: 'Todas', count: totalTodos },
        { key: 'active', label: 'Pendientes', count: activeTodos },
        { key: 'completed', label: 'Completadas', count: completedTodos }
    ];

    return (
        <div className="TodoFilters">
            <div className="TodoFilters-container">
                {filters.map(filter => (
                    <button
                        key={filter.key}
                        className={`TodoFilters-button ${filterType === filter.key ? 'active' : ''}`}
                        onClick={() => changeFilter(filter.key)}
                    >
                        <span className="TodoFilters-label">{filter.label}</span>
                        <span className="TodoFilters-count">{filter.count}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export { TodoFilters };