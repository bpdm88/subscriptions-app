import { daysToCancel } from "../../data/utilities/time";
import { amountPaid } from "../../data/utilities/finances";
import Button from "../Button";

const Subscription = ({ selected, listID }) => {
    let display = selected && selected.id === listID;
    return (
        !display ? null :
        <div className="card-items">
            <p>Monthly Cost: £{selected.cost}</p>
            <p>Next Payment Date: </p>
            <p>Spent so far: £{amountPaid(selected.start, +selected.cost)}</p>
            
            <p>Cancel in: { daysToCancel(selected.notice_period, selected.payment_date) } days</p>
            <Button className="delete" itemID={ listID }></Button>
        </div>
    );
};

export default Subscription;
