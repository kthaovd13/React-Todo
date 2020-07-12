// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo"

const ToDoList = props => {
    return (
        <div>
            {props.chores.map(task => (
                <Todo
                    key = {task.id}
                    task = {task}
                    toggleTask = {props.toggleTask}
                />
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default ToDoList