import React from "react";
import { TodoContext } from "../components/todoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from "../components/TodoForm";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodosError } from "../components/TodosError"
import { TodosLoading } from "../components/TodosLoading"
import { EmptyTodos } from "../components/EmptyTodos";
import { Modal } from "../components/Modal"

function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        
        <TodoList>
            {error && <TodosError error={error} />}
            {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
            {!loading && !searchedTodos.length && <EmptyTodos/>}

            {searchedTodos.map((todo) => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
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
        </React.Fragment>
    );
}

export { AppUI };
