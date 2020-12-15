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
                        <TrafficLight colourCode={2} />
                    </li>
                ))}
            </ul>
        );
    }
}
