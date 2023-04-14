import React from "react";

import './ToDoItem.css'

const ToDoItem = (props) => {
    // console.log(props.items)
    

    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return(
        <li className="todo-item">
            {props.children}
            <button onClick={deleteHandler} className="button">Delete</button>
        </li>
    )
}

export default ToDoItem;