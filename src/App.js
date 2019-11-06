import React from 'react';
import './App.css';
import TodoList from './Components/Todo/TodoList'
import AuthContext from './Components/Context/auth'

class App extends React.Component {    
  state = {
    todoItems:[
      {title:'My todo',description:'my description'},
      {title:'My todo2',description:'my description2'},
      {title:'My todo3',description:'my description3'},
      {title:'My todo4',description:'my description4'},
      {title:'My todo5',description:'my description5'},
      {title:'My todo6',description:'my description6'}
    ],
    show:true,
    authenticated:false
  }

  static contextType = AuthContext

  authenticate = () =>{
    this.setState({
      authenticated:true
    })
  }

  descriptionChange = (index,event)=>{
      const tempTodoList = [...this.state.todoItems]
      tempTodoList[index].description = event.target.value
      
      this.setState( ()=>{
        return ({todoItems:tempTodoList})
      })
  }

  deleteClick = (index) =>{
      const tempTodoList = [...this.state.todoItems]
      tempTodoList.splice(index,1)
      this.setState({todoItems:tempTodoList})
  }

  showHideClick = ()=>{
    this.setState({
      show: !this.state.show
    })
  }

  render() {   
    
    let todoCount = this.state.todoItems.length;
    let todoItems = null

    if (this.state.show){
      todoItems = (<TodoList todoItems={this.state.todoItems} descriptionChange={this.descriptionChange} deleteClick={this.deleteClick}/>);
    }

    return ( 
      <AuthContext.Provider value={{authenticated:this.state.authenticated}}>   
        <div className="App">
        <h1>To-do list - Items({todoCount})</h1>
        { 
          this.context.authenticated ? (<p>Authenticated!</p>):(<p>Please Log In</p>)            
        }


          <button onClick={this.authenticate}> Log In</button>
     

        <button onClick={this.showHideClick}>Show/Hide List</button>       
          {todoItems}       
      </div>      
      </AuthContext.Provider>
    );
   
  }
}

export default App;
