import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue, searchedTodos, totalTodos} = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  const hasSearch = searchValue.trim().length > 0;
  const resultsCount = hasSearch ? searchedTodos.length : totalTodos;

  return (
    <div className="TodoSearch">
      <div className="TodoSearch-container">
        <svg 
          className="TodoSearch-icon" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input 
          className="TodoSearch-input" 
          placeholder="Buscar tareas..." 
          value={searchValue}
          onChange={onSearchValueChange}
        />
        {hasSearch && (
          <button 
            className="TodoSearch-clear"
            onClick={clearSearch}
            title="Limpiar búsqueda"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
      {hasSearch && (
        <div className="TodoSearch-results">
          {resultsCount === 0 ? (
            <span className="TodoSearch-no-results">No se encontraron tareas</span>
          ) : (
            <span className="TodoSearch-count">
              {resultsCount} {resultsCount === 1 ? 'tarea encontrada' : 'tareas encontradas'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export { TodoSearch };