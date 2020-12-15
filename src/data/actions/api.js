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
                payment_date: "20201217",
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {
                id: 2,
                subscription_name: "Netflix",
                cost: 9.99,
                start: 6386387387673686,
                payment_date: "20201222",
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {
                id: 3,
                subscription_name: "Amazon",
                cost: 9.99,
                start: 6386387387673686,
                payment_date: "20201217",
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
        ];

        dispatch(storeSubscriptions(apiResponse));
    };
};
