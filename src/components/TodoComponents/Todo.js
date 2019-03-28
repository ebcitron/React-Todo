import React from 'react';


const Todo = props => {
    console.log("Todo props: ", props);
    return (
        <div className="Todo">
            <h3>{props.task}</h3>
        </div>
    );
    
}
    

export default Todo;