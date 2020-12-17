import { Component } from "react";

class DropDown extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        
        this.props.categoryClick(event.currentTarget.innerText);
    }

    handleDropDown(event) {
        event.preventDefault();
        
        this.props.dropDownClick();
    }

    render() {
        let { categories, dropDownContent, selectedCategories } = this.props;
        return(
            <div class="dropdown">
                <button class="dropbtn" onClick={ this.handleDropDown }>Catagories</button>
                { !dropDownContent ? null :
                    <div class="dropdown-content">
                        <button onClick={ this.handleClick }>Clear</button>
                        { categories ? this.props.categories.map(category => (
                            <button key={ category } onClick={ this.handleClick }>{ category }</button>
                        )) : "Loading...."}
                    </div>
                }
            </div>
        );
    }
}


export default DropDown;
