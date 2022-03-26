import './App.css';
import { TodoCounter } from './TodoCounter';
import data from './data.json';
import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedTodo: "",

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchedTodo: e.target.value
    
    })
  }

  handlerOnClick(e) {
    e.preventDefault();
    console.log("click");
  }


  render() {
 
    return (

      <div className="App">
        <TodoCounter
          todosCompleted={data.filter(todo => todo.completed).length}
          totalTodos={data.length}
        />
        <TodoSearch
          handleChange={this.handleChange}
          searchedTodo={this.state.searchedTodo}
        />

        <TodoList
          handleChange={this.handleChange}
          searchedTodo={this.state.searchedTodo}>

          {data.filter(todo => todo.text.toLowerCase().includes(this.state.searchedTodo))
              .map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  isCompleted = {todo.completed ? "✅" : ""}
                />
          
              ))}
        </TodoList >

        <CreateTodoButton handlerOnClick={this.handlerOnClick} />

      </div>
    );
  }
}

export default App;
