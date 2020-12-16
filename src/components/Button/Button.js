import { Component } from "react";

class Button extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();
        if(window.confirm("Do you want to delete this subscription?")){
            this.props.deleteItem(this.props.itemID);
        };
    }

    render() {
        return(
            <button onClick={ this.handleDelete } className="delete">x</button>
        );
    }
}

export default Button;