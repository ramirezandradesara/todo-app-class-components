import React from "react";

class CreateTodoButton extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" />
        <button
          onClick={this.handlerOnClick}
          type="submit"
        >
          Agregar tarea
        </button>

      </form>

    );
  }
}

export { CreateTodoButton };