import axios from "../../axios-config";

import { storeSubscriptions, storeSubscription, deleteSubscription } from "./state";

export const getSubscriptions = () => {
    return (dispatch) => {
        axios.get("/").then(({ data }) => {
            let subscriptions = data.data;
            dispatch(storeSubscriptions(subscriptions));
        });
        
    };
};

export const postSubscription = (sub) => {
    return (dispatch) => {
        let apiResponse = {
            id: 5,
            subscription_name: sub.name,
            cost: +sub.cost,
            start: sub.startDate,
            payment_date: sub.paymentDate,
            notice_period: +sub.notice,
            categories: ["Bills", "Music", "Streaming"],
        };

        dispatch(storeSubscription(apiResponse));
    };
};

export const apiDelete = ( id ) => {
    return (dispatch) => {
        dispatch(deleteSubscription( id ))
    }
}
