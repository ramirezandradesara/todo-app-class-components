import React from "react";

class CreateTodoButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={`btn btn-${this.props.className}`}
      >
          Agregar tarea
        {this.props.label}
      </button>
    );
  }
}

export { CreateTodoButton };