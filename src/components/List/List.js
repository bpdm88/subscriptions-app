import { Component } from "react";
import TrafficLight from "./TrafficLight/TrafficLight";
import Subscription from "../Subscription";
import { paymentDayToDateObj } from "../../data/utilities/time";
import Form from "../Form";

class List extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.whatColour = this.whatColour.bind(this);
        this.formClick = this.formClick.bind(this);
    }

    componentDidMount() {
        this.props.handleLoad();
    }

    handleClick(event) {
        this.props.setSelected(event.currentTarget.dataset.id);
    }

    formClick() {
        this.props.displayForm();
    }

    whatColour(paymentDay) {
        let paymentDate = paymentDayToDateObj(paymentDay);

        let current = new Date(); // the current date

        let difference = paymentDate - current; // milliseconds difference

        let days = difference / (1000 * 60 * 60 * 24); // turns milliseconds to days

        let rounded = days.toFixed(1); // rounded day

        if (rounded <= 5) {
            return 3;
        } else if (rounded <= 10) {
            return 2;
        } else return 1;
    }

    render() {
        const { list } = this.props;

        return (
            <ul>
                {list.map((item) => (
                    <li
                        key={item.id}
                        onClick={this.handleClick}
                        data-id={item.id}
                        className="list-item"
                    >
                        <div className="list-item_header">
                            <p>{item.subscription_name}</p>

                            <TrafficLight
                                colourCode={this.whatColour(item.payment_date)}
                            />
                        </div>
                        <Subscription listID={item.id} />
                    </li>
                ))}
                <li className="list-item">
                    Add Subscription
                    <button class="add" onClick={this.formClick}>
                        +
                    </button>
                    <Form />
                </li>
            </ul>
        );
    }
}

export default List;
