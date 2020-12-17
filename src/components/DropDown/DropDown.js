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
                    <button onClick={ this.handleClick }>All</button>
                    {this.props.categories.map(category => (
                        <button key={ category } onClick={ this.handleClick }>{ category }</button>
                    ))}
                </div>
            </div>
        );
    }
}


export default DropDown;
