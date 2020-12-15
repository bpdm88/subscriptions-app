import { Component } from "react";
import TrafficLight from "./TrafficLight/TrafficLight";

class List extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.handleLoad();
    }

    handleClick(event) {
        this.props.setSelected(event.currentTarget.dataset.id);
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
                    >
                        {item.subscription_name}

                        <TrafficLight
                            colourCode={whatColour(item.payment_date)}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;

let whatColour = (payment) => {
    let dateString = payment;

    let year = dateString.substring(0, 4);
    let month = dateString.substring(4, 6);
    let day = dateString.substring(6, 8);

    let date = new Date(year, month - 1, day); // creates payment date based off string

    let current = new Date(); // the current date

    let difference = date - current; // milliseconds difference

    let days = difference / (1000 * 60 * 60 * 24); // turns milliseconds to days

    let rounded = days.toFixed(1); // rounded day

    if (rounded <= 5) {
        return 3;
    } else if (rounded <= 10) {
        return 2;
    } else return 1;
};
