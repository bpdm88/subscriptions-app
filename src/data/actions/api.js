import axios from "../../axios-config";

import {
    storeSubscriptions,
    storeSubscription,
    deleteSubscription,
} from "./state";

export const getSubscriptions = () => {
    return (dispatch) => {
        axios.get("/").then(({ data }) => {
            let subscriptions = data.data;
            dispatch(storeSubscriptions(subscriptions));
        });
    };
};

export const postSubscription = (data) => {
    return (dispatch) => {
        axios
            .post("/", {
                subscription_name: data.name,
                cost: data.cost,
                start: data.startDate.replace(/-/g, ""),
                payment_date: data.paymentDate,
                notice_period: data.notice,
                categories: typeof data.categories === "string" ? data.categories.split(", ") : [],
            })
            .then(({ data }) => {
                dispatch(storeSubscription(data.data));
            });
    };
};

export const apiDelete = (id) => {
    return (dispatch) => {
        axios.delete(`/${id}`).then(() => {
            dispatch(deleteSubscription(id));
        });
    };
};
