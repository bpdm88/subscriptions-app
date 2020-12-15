const Subscription = ({ selected }) => {

    return (
        !selected ? null :
        <div className="subscr-card">
            <h1>
                { selected.subscription_name }
            </h1>
        </div>
    );
};

export default Subscription;
