import initialState from "./initial";

// Reducer functions

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "SELECTED_SUBSCRIPTION":
            return {
                ...state,
                id: action.data.subscriptions.id,
            };
        default:
            return state;
    }
};

export default reducer;
