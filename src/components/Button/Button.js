import { Component } from "react";

class Button extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();

        this.props.deleteItem(this.props.itemID);
    }

    render() {
        return(
            <button onClick={ this.handleDelete } className="delete">x</button>
        );
    }
}

export default Button;