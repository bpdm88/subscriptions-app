import { daysToCancel } from "../../data/utilities/time";
import { amountPaid } from "../../data/utilities/finances";
import Button from "../Button";
import Categories from "../Categories/Categories";

const Subscription = ({ selected, listID }) => {
    let display = selected && selected.id === listID;
    return (
        !display ? null :
        <>
            <p>Monthly Cost £{selected.cost}</p>
            <p>Next payment date ___</p>
            <p>Spent so far £{amountPaid(selected.start, +selected.cost)}</p>
            <p>
                Cancel in { daysToCancel(selected.notice_period, selected.payment_date) } days
            </p>
            <Categories selected={ selected }/>
            <Button className="delete" itemID={ listID }></Button>
        </>
    );
};

export default Subscription;
