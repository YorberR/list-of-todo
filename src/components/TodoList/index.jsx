import React from 'react';
import './TodoList.css'

function TodoList(props){
return (
    <div className="TodoList">
        {props.children}
    </div>
    );
}

export { TodoList };