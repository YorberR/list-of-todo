import React from "react";
import { useLocalStorage } from './useLocalStorange'

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);

    const { item: filterType, saveItem: setFilterType } = useLocalStorage("filterType", "all");
    
    const [searchValue, setSearchValue] = React.useState('');


    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = todos;

    const changeFilter = (newFilter) => {
        setFilterType(newFilter);
    };

    const applyFilters = () => {
        let filteredTodos = todos;

        switch (filterType) {
            case 'active':
                filteredTodos = filteredTodos.filter(todo => !todo.completed);
                break;
            case 'completed':
                filteredTodos = filteredTodos.filter(todo => todo.completed);
                break;
            case 'all':
            default:
                break;
        }

        if (searchValue.trim().length > 0) {
            const searchText = searchValue.toLowerCase().trim();
            filteredTodos = filteredTodos.filter(todo => 
                todo.text.toLowerCase().includes(searchText)
            );
        }

        return filteredTodos;
    };

    searchedTodos = applyFilters();

    const addTodo = (text) => {
        if (!text.trim()) return;
        
        const newTodos = [...todos];
        newTodos.push({
            id: Date.now() + Math.random(),
            completed: false,
            text: text.trim(),
        });
        saveTodos(newTodos);
    };

    const changeStateTodos = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };



    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            changeStateTodos,
            deleteTodo,
            addTodo,
            filterType,
            changeFilter,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
