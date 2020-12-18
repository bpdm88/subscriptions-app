const initial = {
    subscriptions: [{
        id: 1,
        subscription_name: "Loading....",
        payment_date: new Date().getDate(),
        categories: [],
    }],
    loaded: false,
    selected: null,
    form: false,
    categoryFilter: [],
    dropDown: false,
    filterContent: false,
};

export default initial;
