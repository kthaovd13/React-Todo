import React from "react"

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ""
        }
    }
    render() {
        return (
            <form>
                <input
                    type ="text"
                    name="task"
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default ToDoForm