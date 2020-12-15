import { convertToDays, dateStingToDateObj } from "../../data/utilities/time";

const Subscription = ({ selected }) => {

    let test = dateStingToDateObj("20201225");
    let current = new Date();

    let milliseconds = test - current;
    console.log(convertToDays(milliseconds));


    return (
        !selected ? null :
        <div className="list-item">
            <h1>
                { selected.subscription_name }
            </h1>
            <p>Monthly Cost £{selected.cost}</p>
            <p>Avoid next payment ? Cancel in {"BLAH"} days</p>
        </div>
    );
};

export default Subscription;
