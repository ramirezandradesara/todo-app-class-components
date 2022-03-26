import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
       <p>
           {this.props.text}
       </p>
      </li>
    );
  }
}

export { TodoItem };