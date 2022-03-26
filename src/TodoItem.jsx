import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
       <p>
           {this.props.text} 
           <span> </span> 
           {this.props.isCompleted}
       </p>
      </li>
    );
  }
}

export { TodoItem };