import React from 'react'

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.searchedTodo(e.target.value)
    }

    render() {
        return (
            <div>
                <input onChange={this.props.handleChange} value={this.props.searchedTodo} type="text" placeholder="Buscar" />

            </div>
        )
    }
}

export { TodoSearch };