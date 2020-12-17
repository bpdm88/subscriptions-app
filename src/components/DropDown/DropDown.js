import { Component } from "react";

class DropDown extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        
        this.props.categoryClick(event.currentTarget.innerText);
    }

    render() {
        let { categories } = this.props;
        return(
            <div class="dropdown">
                <button class="dropbtn">Catagories</button>
                <div class="dropdown-content">
                    <button onClick={ this.handleClick }>Clear</button>
                    { categories ? this.props.categories.map(category => (
                        <button key={ category } onClick={ this.handleClick }>{ category }</button>
                    )) : "Loading...."}
                </div>
            </div>
        );
    }
}


export default DropDown;
