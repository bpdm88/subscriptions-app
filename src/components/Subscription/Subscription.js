const Subscription = ({ selected }) => {

    let current = Date.now();

    let cancelDate = new Date(1608854400);

    const convertToDays = (unixTimeStp) => {
        return unixTimeStp / (1000*60*60*24);
    }

    let daysLeft = cancelDate - current;


    return (
        !selected ? null :
        <div className="list-item">
            <h1>
                { selected.subscription_name }
            </h1>
            <p>Monthly Cost £{selected.cost}</p>
            <p>Avoid next payment ? Cancel in { daysLeft } days</p>
        </div>
    );
};

export default Subscription;
