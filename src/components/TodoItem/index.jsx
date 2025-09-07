import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const [isDeleting, setIsDeleting] = React.useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        setTimeout(() => {
            props.onDelete();
        }, 300);
    };

    return (
        <div className={`TodoItem ${isDeleting ? 'TodoItem--deleting' : ''}`}>
            <div className="TodoItem-content">
                <input
                    type="checkbox"
                    className="TodoItem-checkbox"
                    checked={props.completed}
                    onChange={props.onComplete}
                />
                <span 
                    className={`TodoItem-text ${props.completed ? 'TodoItem-text--completed' : ''}`}
                >
                    {props.text}
                </span>
            </div>
            <div className="TodoItem-actions">
                <button 
                    className="TodoItem-action TodoItem-action--delete"
                    onClick={handleDelete}
                    title="Eliminar tarea"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

export { TodoItem };

