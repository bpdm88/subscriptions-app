import { deleteSubscription } from "./actions/state";
import initialState from "./initial";
import { paymentDayToDateObj, cancelDate } from "./utilities/time";

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
        // selected: +selected,        
        selected: +selected === state.selected ? 0 : +selected,
    };
};

const saveSubscription = (state, { data }) => {
    return {
        ...state,
        subscriptions: [...state.subscriptions, data],
    };
};

const deleteFromState = (state, { id }) => {
    let subscriptions = state.subscriptions;

    let updated = subscriptions.filter((item) => item.id !== id);
    return {
        ...state,
        subscriptions: [...updated],
    };
};

const toggleForm = (state) => {
    return {
        ...state,
        form: !state.form,
    };
};

const addCatFilter = ( state, { category } ) => {
    if(state.categoryFilter.includes(category)) {
        return {
            ...state,
        }
    } else {
        return {
            ...state,
            categoryFilter: [...state.categoryFilter, category],
        }
    }
}

const clrCatFilter = ( state ) => {
    return {
        ...state,
        categoryFilter: [],
    }
}

const toggleDropDown = ( state ) => {
    return {
        ...state,
        dropDown: !state.dropDown,
    }
}

const toggleFilter = ( state ) => {
    return {
        ...state,
        filterContent: !state.filterContent,
    }
}

const filterByCancel = ( state ) => {
    return {
        ...state,
        subscriptions: state.subscriptions.sort(( a, b ) => cancelDate( a.notice_period, paymentDayToDateObj(a.payment_date) ) - cancelDate( b.notice_period, paymentDayToDateObj(b.payment_date) )),
    }
}

const filterByPayment = ( state ) => {
    return {
        ...state,
        subscriptions: state.subscriptions.sort(( a, b ) => paymentDayToDateObj(a.payment_date) - paymentDayToDateObj(b.payment_date)),
    }
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "STORE_SUBSCRIPTIONS":
            return saveSubscriptions(state, action);
        case "SET_SELECTED":
            return setSelected(state, action);
        case "SET_FORM":
            return toggleForm(state);
        case "SAVE_SUBSCRIPTION":
            return saveSubscription(state, action);
        case "DELETE":
            return deleteFromState(state, action);
        case "ADD_CAT_FILTER":
            return addCatFilter(state, action);
        case "CLEAR_CAT_FILTER":
            return clrCatFilter(state);
        case "TOGGLE_DROP_DOWN":
            return toggleDropDown(state);
        case "TOGGLE_FILTER":
            return toggleFilter(state);
        case "FILTER_BY_PAYMENT":
            return filterByPayment(state);
        case "FILTER_BY_CANCEL":
            return filterByCancel(state);
        default:
            return state;
    }
};

export default reducer;
