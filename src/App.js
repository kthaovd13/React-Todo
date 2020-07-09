import React from 'react';
import ToDoForm from "./components/TodoForm"

const chores = [
  {
    task: 'car wash',
    id: 100,
    completed: false,
  },
  {
    task: 'mop',
    id: 101,
    completed: false,
  },
  {
    task: 'vacuum',
    id: 102,
    completed: false,
  },
  {
    task: 'laundry',
    id: 103,
    completed: false,
  },
  {
    task: 'wash dishes',
    id: 104,
    completed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
      this.state = {
        chores: chores
      }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm />
      </div>
    );
  }
}

export default App;
