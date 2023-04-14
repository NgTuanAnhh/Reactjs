import React, {useState} from "react";

import Button from "../UI/Button/Button";
import './ToDoInput.css'

const ToDoInput = (props) => {

    const [enterValue, setEnterValue] = useState('');

    const toDoInputHandler = (event) => {
        setEnterValue(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(enterValue)
        props.addToDO(enterValue)
        setEnterValue('')
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Name To Do</label>
                <input type='text' value={enterValue} onChange={toDoInputHandler}/>
            </div>
            <Button type="submit">Add</Button>
        </form>
    )
}

export default ToDoInput;