//  import axios from "../../axios-config";

import { selectedSubscription } from "./state";

export const getSubscription = () => {
    return (dispatch) => {
        let apiResponse = {
            id: 1,
            name: "Spotify",
            cost: 9.99,
            start: 6386387387673686,
            payment_date: 17, // day of month
            notice_period: 14, // days
            tags: ["Bills", "Music", "Streaming"],
        };

        dispatch(selectedSubscription(apiResponse));
    };
};
