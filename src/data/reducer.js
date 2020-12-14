import initialState from "./initial";

// Reducer functions
const saveSubscription = (state, { data }) => {
    return {
        ...state,
        subscriptions: data
    }
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "SELECTED_SUBSCRIPTION": return saveSubscription(state, action);
        default:
            return state;
    }
};

export default reducer;
