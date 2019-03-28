// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log("TodoList This.State: ", props.todos, "This.Props: ");
    return (
        <div className='TodoList'>
            
       
            {props.todos.map(todo => {
                return(
                <div className='ATodo'>
                    
                    <Todo task={todo.task} id={todo.id} completed={todo.completed} />
                
                </div>
                )
            })}

        </div>
        
    );
    
}

export default TodoList;