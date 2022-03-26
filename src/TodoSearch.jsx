import React from 'react'

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.searchedTodo(e.target.value)
        console.log(e.target.value);
    }
    
    render() {
        console.log(this.props.searchedTodo);
        return (
            <div>
                <input onChange={(e) => this.props.handleChange(e)} type="text" placeholder="Buscar" />

            </div>
        )
    }
}

export { TodoSearch };