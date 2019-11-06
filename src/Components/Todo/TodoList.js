import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
   

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps !== this.props){
            console.log('Should Update')
            return true;
        }   
        else{
            return false;
        } 
    }

    componentDidMount(){
        console.log('Mounted')
    }
    
    render(){        
        return(
            this.props.todoItems.map( (todoItem,index)=>{
                return( 
                <Todo 
                    key={index}
                    todoTitle={todoItem.title}
                    todoDescription={todoItem.description}
                    onDescriptionChange={this.props.descriptionChange.bind(this,index)}
                    onDeleteClick={this.props.deleteClick.bind(this,index)}
                />
            )})
        );
    }        
}

export default TodoList;