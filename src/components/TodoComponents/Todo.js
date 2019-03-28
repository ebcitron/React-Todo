import React from 'react';
import './Todo.css';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            id: this.props.id,
            completed: this.props.completed
        }
    }

    handleToggle = e => {
        if (this.state.completed === false) {
            this.setState({ completed: true })
        } else {
            this.setState({ completed: false }
            )}

};

  
    render() {
        return (
            <div >
                <button
                      style={this.state.completed ? { textDecoration: 'line-through' } : null}
                    onClick={this.handleToggle}>{this.props.task}</button>
            </div>
        );
    }

    
    }
export default Todo;