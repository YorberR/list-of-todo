import React from "react";
import "./App.css";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodosError } from "../components/TodosError"
import { TodosLoading } from "../components/TodosLoading"
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoFilters } from "../components/TodoFilters";
import { Footer } from "../components/Footer";

function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        changeStateTodos,
        deleteTodo,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            
            <div className="TodoActions">
                <TodoInput />
            </div>
            
            <div className="TodoSearchSection">
                <TodoSearch />
            </div>
            
            <TodoFilters />
            
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && new Array(3).fill(1).map((a, i) => <TodosLoading key={i} />)}
                {!loading && !searchedTodos.length && <EmptyTodos/>}

                {!loading && searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => changeStateTodos(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>

            <Footer />
        </React.Fragment>
    );
}

export { AppUI };
