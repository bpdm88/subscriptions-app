import { daysToCancel } from "../../data/utilities/time";
import { amountPaid } from "../../data/utilities/finances";
import Button from "../Button";
import Categories from "../Categories/Categories";

const Subscription = ({ selected, listID }) => {
    let display = selected && selected.id === listID;
    return (
        !display ? null :
        <div className="card-items">
            <p>Monthly Cost: £{selected.cost}</p>
            <p>Next payment date: </p>
            <p>Spent so far: £{amountPaid(selected.start, +selected.cost)}</p>
            <p>Cancel in: { daysToCancel(selected.notice_period, selected.payment_date) } days</p>
            <Categories selected={ selected }/>
            <Button className="delete" itemID={ listID }></Button>
        </div>
    );
};

export default Subscription;
