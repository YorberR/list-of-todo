import React from "react";
import { TodoContext } from "../TodoContext";
import './EmptyTodos.css';

function EmptyTodos(){
    const { filterType, searchValue, totalTodos } = React.useContext(TodoContext);
    
    const getEmptyMessage = () => {
        if (searchValue.trim().length > 0) {
            return {
                icon: "🔍",
                title: "No se encontraron tareas",
                message: `No hay tareas que coincidan con "${searchValue}"`
            };
        }
        
        if (totalTodos === 0) {
            return {
                icon: "📝",
                title: "No hay tareas aún",
                message: "Agrega tu primera tarea para comenzar a organizar tu día"
            };
        }
        
        switch (filterType) {
            case 'active':
                return {
                    icon: "🎉",
                    title: "¡Todas las tareas completadas!",
                    message: "No tienes tareas pendientes. ¡Excelente trabajo!"
                };
            case 'completed':
                return {
                    icon: "⏳",
                    title: "No hay tareas completadas",
                    message: "Completa algunas tareas para verlas aquí"
                };
            default:
                return {
                    icon: "📝",
                    title: "No hay tareas",
                    message: "Agrega una nueva tarea para comenzar"
                };
        }
    };
    
    const { icon, title, message } = getEmptyMessage();
    
    return (
        <div className="EmptyTodos">
            <div className="EmptyTodos-icon">{icon}</div>
            <h3 className="EmptyTodos-title">{title}</h3>
            <p className="EmptyTodos-message">{message}</p>
        </div>
    );
}

export { EmptyTodos };