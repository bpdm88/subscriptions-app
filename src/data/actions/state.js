export const reset = () => ({
    type: "RESET",
});

export const storeSubscriptions = (data) => ({
    type: "STORE_SUBSCRIPTIONS",
    data: data,
});

export const selected = (id) => ({
    type: "SET_SELECTED",
    selected: id,
});

export const storeSubscription = (data) => ({
    type: "SAVE_SUBSCRIPTION",
    data: data,
});
