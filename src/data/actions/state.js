export const reset = () => ({
    type: "RESET",
});

export const selectedSubscription = (data) => ({
    type: "SELECTED_SUBSCRIPTION",
    data: data,
});
