const Subscription = ({ data, selected }) => {
    return (
        <div className="subscr-card">
            <h1>
                {selected.length > 0
                    ? selected[0].subscription_name
                    : "loading.."}
            </h1>
        </div>
    );
};

export default Subscription;
