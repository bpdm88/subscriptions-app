import { convertToDays, dateStringToDateObj, cancelDate } from "../../data/utilities/time";

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
                    convertToDays(cancelDate(selected.notice_period, selected.payment_date) - Date.now())
                } 
                days
            </p>
        </div>
    );
};

export default Subscription;
