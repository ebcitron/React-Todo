import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }

    };

    handleSubmit = e => {
        
    }

    render() {
        return (
            <div className='form'>
                <input onSubmit={handleSubmit}
                    type='text'
                value = {this.state.task}
                    placeholder='Anything To Do?'
                    />
                    
            </div>  
    );
}

}

export default TodoForm;