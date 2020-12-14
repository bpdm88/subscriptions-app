import initialState from "./initial";

// Reducer functions
const saveSubscriptions = (state, { data }) => {
    return {
        ...state,
        subscriptions: data
    }
}

const setSelected = ( state, { selected } ) => {
    return {
        ...state,
        selected: +selected,
    }
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "STORE_SUBSCRIPTION": return saveSubscriptions(state, action);
        case "SET_SELECTED": return setSelected( state, action );

        default:
            return state;
    }
};

export default reducer;
