import { Component } from "react";

class DropDown extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        console.log(event.currentTarget.innerText);
        console.log(this.props.categories);
    }

    render() {
        return(
            <div class="dropdown">
                <button class="dropbtn">Catagories</button>
                <div class="dropdown-content">
                    <button onClick={ this.handleClick }>Link 1</button>
                    <button onClick={ this.handleClick }>Link 2</button>
                    <button onClick={ this.handleClick }>Link 3</button>
                </div>
            </div>
        );
    }
}


export default DropDown;
