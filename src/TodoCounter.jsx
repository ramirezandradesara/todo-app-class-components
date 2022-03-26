import React from "react";

class TodoCounter extends React.Component {
  render() {
    
    return (
      <h1> Has completado {this.props.todosCompleted} de {this.props.totalTodos} tareas</h1>
    );
  }
}

export { TodoCounter };