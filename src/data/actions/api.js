//  import axios from "../../axios-config";

import { storeSubscriptions } from "./state";
import { storeSubscription } from "./state";

export const getSubscriptions = () => {
    return (dispatch) => {
        let apiResponse = [
            {
                id: 1,
                subscription_name: "Spotify",
                cost: 9.99,
                start: 6386387387673686,
                payment_date: "20201217",
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {
                id: 2,
                subscription_name: "Netflix",
                cost: 30.02,
                start: "20200401",
                payment_date: "20201222",
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {
                id: 3,
                subscription_name: "Amazon",
                cost: 6.89,
                start: "20200401",
                payment_date: "20201217",
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {
                id: 4,
                subscription_name: "Sky Sports",
                cost: 9.99,
                start: "20200401",
                payment_date: "2021016",
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
        ];

        dispatch(storeSubscriptions(apiResponse));
    };
};

export const postSubscription = (state) => {
    return (dispatch) => {
        let apiResponse = {
            subscription_name: "Spotify",
            cost: 9.99,
            start: 20201015,
            payment_date: 20201217,
            notice_period: 14,
        };

        dispatch(storeSubscription(apiResponse));
    };
};
