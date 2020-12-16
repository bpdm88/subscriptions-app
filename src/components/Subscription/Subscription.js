import { daysToCancel } from "../../data/utilities/time";

const Subscription = ({ selected }) => {

    return (
        !selected ? null :
        <div className="list-item">
            <h1>
                { selected.subscription_name }
            </h1>
            <p>Monthly Cost £{selected.cost}</p>
            <p>
                Avoid next payment ? Cancel in 
                {
                    daysToCancel(selected.notice_period, selected.payment_date)
                } 
                days
            </p>
        </div>
    );
};

export default Subscription;
