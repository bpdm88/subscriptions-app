//  import axios from "../../axios-config";

import { storeSubscriptions } from "./state";

export const getSubscriptions = () => {
    return (dispatch) => {
        let apiResponse = [
            {
                id: 1,
                subscription_name: "Spotify",
                cost: 9.99,
                start: 6386387387673686,
                payment_date: 31 / 12 / 2020,
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {
                id: 2,
                subscription_name: "Netflix",
                cost: 30.02,
                start: 6386387387673686,
                payment_date: 26 / 12 / 2020,
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {
                id: 3,
                subscription_name: "Amazon",
                cost: 6.89,
                start: 6386387387673686,
                payment_date: 21 / 12 / 2020,
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
        ];

        dispatch(storeSubscriptions(apiResponse));
    };
};
