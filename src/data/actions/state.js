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

export const deleteSubscription = (id) => ({
    type: "DELETE",
    id: id,
});

<<<<<<< HEAD
export const setForm = () => ({
    type: "SET_FORM",
});
=======
export const categoryFilter = (category) => {
    if( category === "Clear" ) {
        return {
            type: "CLEAR_CAT_FILTER",
        }
    } else {
        return {
            type: "ADD_CAT_FILTER",
            category: category,
        }
    }
}

>>>>>>> main
