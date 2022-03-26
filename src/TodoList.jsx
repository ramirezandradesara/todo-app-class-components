import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <ul >
       {this.props.children}
      </ul>
    );
  }
}
export { TodoList };