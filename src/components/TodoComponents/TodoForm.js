import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {
        task: ""
      }
    };
  }

  handleSubmission = e => {
    e.preventDefault();

    // calls in the add function thats passed in as props
    this.props.addToDo({
      task: this.state.task,
      id: Date.now(),
      completed: false
    });

    this.setState({
      task: ""
    });
  };

  handleInputChange = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleInputChange}
          placeholder="Anything To Do?"
          name="task"
        />

        <button onClick={this.handleSubmission}>Add To List</button>
        <button onClick={this.deleteTodo}>Erase Slashed To Dos</button>
      </div>
    );
  }
}

export default TodoForm;
