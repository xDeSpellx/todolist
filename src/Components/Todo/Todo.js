import React from 'react'
import './Todo.css'
import PropTypes from 'prop-types'

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
        //this.focusInput = this.focusInput.bind(this);

    }

    focusInput(){
        this.myRef.current.focus();
    }
    
    render(){
        return(
            <div className="todoItem">
                <p>Todo Item</p>    
                <p>Title:{this.props.todoTitle}</p>
                <p >Description:{this.props.todoDescription}</p>
                <input ref={this.myRef} type="text" value={this.props.todoDescription} onChange={this.props.onDescriptionChange}></input>
                <button onClick={this.props.onDeleteClick}>Delete</button>
                <button onClick={this.focusInput.bind(this)}>Focus Desc</button>
            </div>
        );
    }
}

Todo.propTypes={
    todoTitle:PropTypes.string,
    todoDescription:PropTypes.string
}

export default Todo;