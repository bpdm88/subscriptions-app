import { daysToCancel } from "../../data/utilities/time";
import { amountPaid } from "../../data/utilities/finances";
import Button from "../Button";

const Subscription = ({ selected, listID }) => {
    let display = selected && selected.id === listID;
    return (
        !display ? null :
        <>
            <p>Monthly Cost £{selected.cost}</p>
            <p>Next payment date ___</p>
            <p>Spent so far £{amountPaid(selected.start, +selected.cost)}</p>
            <hr/>
            <p>
                Cancel in { daysToCancel(selected.notice_period, selected.payment_date) } days
            </p>
            <Button className="delete" itemID={ listID }></Button>
        </>
    );
};

export default Subscription;
