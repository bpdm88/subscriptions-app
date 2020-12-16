import React from "react";
import FormField from "./FormField";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            cost: 0,
            startDate: "",
            paymentDate: "",
            notice: 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCost = this.handleChangeCost.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangePayment = this.handleChangePayment.bind(this);
        this.handleChangeNotice = this.handleChangeNotice.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleAddSubscription({ ...this.state });
    }

    handleChangeName(event) {
        this.setState({ name: event.currentTarget.value });
    }

    handleChangeCost(event) {
        this.setState({ cost: event.currentTarget.value });
    }

    handleChangeStart(event) {
        this.setState({ startDate: event.currentTarget.value });
    }

    handleChangePayment(event) {
        let date;

        if (event.currentTarget.value > 31) {
            date = 31;
        } else if (event.currentTarget.value < 1) {
            date = 1;
        } else {
            date = event.currentTarget.value;
        }

        this.setState({ paymentDate: date });
    }

    handleChangeNotice(event) {
        this.setState({ notice: event.currentTarget.value });
    }

    render() {
        let { name, cost, startDate, paymentDate, notice } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <FormField
                    label="Name"
                    name="Name"
                    type="text"
                    handleChange={this.handleChangeName}
                    value={name}
                />
                <FormField
                    label="Cost"
                    name="Cost"
                    type="number"
                    handleChange={this.handleChangeCost}
                    value={cost}
                />
                <FormField
                    label="Start Date"
                    name="Start Date"
                    type="date"
                    handleChange={this.handleChangeStart}
                    value={startDate}
                />
                <FormField
                    label="Payment Date"
                    name="Payment Date"
                    type="number"
                    min="1"
                    max="31"
                    handleChange={this.handleChangePayment}
                    value={paymentDate}
                />
                <FormField
                    label="Notice Period"
                    name="Notice Period"
                    type="number"
                    handleChange={this.handleChangeNotice}
                    value={notice}
                />
                <button>Add Subscription</button>
            </form>
        );
    }
}

export default Form;