//  import axios from "../../axios-config";

import { storeSubscriptions, storeSubscription, deleteSubscription } from "./state";

export const getSubscriptions = () => {
    return (dispatch) => {
        let apiResponse = [
            {
                id: 1,
                subscription_name: "Spotify",
                cost: 9.99,
                start: "20200401",
                payment_date: 17,
                notice_period: 14,
                categories: ["Bills", "Music", "Streaming"],
            },
            {
                id: 2,
                subscription_name: "Netflix",
                cost: 30.02,
                start: "20200401",
                payment_date: 15,
                notice_period: 14,
                categories: ["Bills", "Music", "Streaming"],
            },
            {
                id: 3,
                subscription_name: "Amazon",
                cost: 6.89,
                start: "20200401",
                payment_date: 1,
                notice_period: 14,
                categories: ["Bills", "Music", "Streaming"],
            },
            {
                id: 4,
                subscription_name: "Sky Sports",
                cost: 9.99,
                start: "20200401",
                payment_date: 3,
                notice_period: 14,
                categories: ["Bills", "Music", "Streaming"],
            },
        ];

        dispatch(storeSubscriptions(apiResponse));
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
