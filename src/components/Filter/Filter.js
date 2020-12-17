import { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props);

        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleClickPayment = this.handleClickPayment.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
    }

    handleClickPayment(event) {
        event.preventDefault();
        
        this.props.filterPaymentClicked();
    }

    handleClickCancel(event) {
        event.preventDefault();
        
        this.props.filterCancelClicked();
    }

    handleDropDown(event) {
        event.preventDefault();
        
        this.props.filterClick();
    }

    render() {
        let { filterContent, dropDown } = this.props;
        return(
            dropDown ? null :
            <div class="dropdown">
                <button class="dropbtn" onClick={ this.handleDropDown }>Filter</button>
                { !filterContent ? null :
                    <div class="dropdown-content">
                        <button onClick={ this.handleClickPayment }>Payment day</button>
                        <button onClick={ this.handleClickCancel }>Cancel day</button>
                    </div>
                }
            </div>
        );
    }
}


export default Filter;