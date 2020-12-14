export const reset = () => ({
    type: "RESET",
});

export const storeSubscriptions = (data) => ({
    type: "STORE_SUBSCRIPTION",
    data: data,
});

export const selected = ( id ) => (
    {
        type: "SET_SELECTED",
        selected: id,
    }
);
