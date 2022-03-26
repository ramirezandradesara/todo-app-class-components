
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

  handleChange(searchedTodo) {
    this.setState({
      searchedTodo: searchedTodo
    })
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

          {this.state.searchedTodo !== data.text
            ? data.map(todo => (
              <TodoItem key={todo.text} text={todo.text} />)
            )
            : data.filter(todo => todo.text.includes(this.state.searchedTodo))
              .map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                />
          
              ))}
        </TodoList >

        <CreateTodoButton />

      </div>
    );
  }
}

export default App;
