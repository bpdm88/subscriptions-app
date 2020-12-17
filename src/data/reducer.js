import { deleteSubscription } from "./actions/state";
import initialState from "./initial";

// Reducer functions
const saveSubscriptions = (state, { data }) => {
    return {
        ...state,
        subscriptions: data,
    };
};

const setSelected = (state, { selected }) => {
    return {
        ...state,
        selected: +selected,
    };
};

const saveSubscription = (state, { data }) => {
    return {
        ...state,
        subscriptions: [...state.subscriptions, data],
    };
};

const deleteFromState = ( state, { id } ) => {
    let subscriptions = state.subscriptions;

    let updated = subscriptions.filter( item => item.id !== id )
    return {
        ...state,
        subscriptions: [ ...updated ],
    }
}

const addCatFilter = ( state, { category } ) => {
    return {
        ...state,
        categoryFilter: [...state.categoryFilter, category],
    }
}

const clrCatFilter = ( state ) => {
    return {
        ...state,
        categoryFilter: [],
    }
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "STORE_SUBSCRIPTIONS":
            return saveSubscriptions(state, action);
        case "SET_SELECTED":
            return setSelected(state, action);
        case "SAVE_SUBSCRIPTION":
            return saveSubscription(state, action);
        case "DELETE":
            return deleteFromState(state, action);
        case "ADD_CAT_FILTER":
            return addCatFilter(state, action);
        case "CLEAR_CAT_FILTER":
            return clrCatFilter(state);
        default:
            return state;
    }
};

export default reducer;
