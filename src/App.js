import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }



  addToDo = todo => {
    const copy = this.state.todos.slice();
    copy.push(todo);
    this.setState({ todos: copy });
    
  };

  clearCompleted = e => {
    if (this.state.completed === true) {
      
    }
  }
  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
  
    console.log("App This.State: ", this.state, "This.Props: ",this.props);  
    return (
      <div>
        <h2>To Do List</h2>
        <TodoList todos={this.state.todos} /> 
        <TodoForm addToDo={this.addToDo} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
