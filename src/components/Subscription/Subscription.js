const Subscription = ({ data, selected }) => {

    return (
        <div>
            <h1>{ selected.length > 0 ? selected[0].name : "loading.." }</h1>
        </div>
    );
}

export default Subscription;