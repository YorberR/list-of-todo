import React from "react";
import "./App.css";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from "../components/TodoForm";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodosError } from "../components/TodosError"
import { TodosLoading } from "../components/TodosLoading"
import { EmptyTodos } from "../components/EmptyTodos";
import { Modal } from "../components/Modal";
import { Footer } from "../components/Footer";
import { HideCompleted } from "../components/HideCompleted";

function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        changeStateTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        showTip,  
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        
        <TodoList>
            {error && <TodosError error={error} />}
            <HideCompleted />
            {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
            {!loading && !searchedTodos.length && <EmptyTodos/>}

            {searchedTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => changeStateTodos(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onSeen={() => showTip(todo)}
                />
            ))}
        </TodoList>

        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
        <Footer />
        </React.Fragment>
    );
}

export { AppUI };
