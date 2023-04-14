import React from "react";


import ToDoItem from "../ToDoItem/ToDoItem";
import './ToDoList.css'

const ToDoList = (props) => {
    return(
        <ul className="todo-list">
            {props.items.map(item => (
                <ToDoItem
                    id={item.id}
                    key={item.id}
                    onDelete={props.onDeleteItem}
                    >
                        {item.text}
                </ToDoItem>
            ))}
        </ul>
    )
}

export default ToDoList;