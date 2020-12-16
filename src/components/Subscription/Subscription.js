import { daysToCancel } from "../../data/utilities/time";
import { amountPaid } from "../../data/utilities/finances";

const Subscription = ({ selected, listID }) => {
    let display = selected && selected.id === listID;
    return (
        !display ? null :
        <>
            <p>Monthly Cost £{selected.cost}</p>
            <p>
                Avoid next payment ? Cancel in 
                {
                    daysToCancel(selected.notice_period, selected.payment_date)
                } 
                days
            </p>
            <p>Spent so far £{amountPaid(selected.start, +selected.cost)}</p>
        </>
    );
};

export default Subscription;
