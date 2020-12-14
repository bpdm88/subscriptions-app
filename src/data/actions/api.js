//  import axios from "../../axios-config";

import { selectedSubscription } from "./state";

export const getSubscriptions = () => {
    return (dispatch) => {
        let apiResponse = [
            {   id: 1,
                name: "Spotify",
                cost: 9.99,
                start: 6386387387673686,
                payment_date: 17,
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {   id: 1,
                name: "Spotify",
                cost: 9.99,
                start: 6386387387673686,
                payment_date: 17,
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            },
            {   id: 1,
                name: "Spotify",
                cost: 9.99,
                start: 6386387387673686,
                payment_date: 17,
                notice_period: 14,
                tags: ["Bills", "Music", "Streaming"],
            }
        ]


        dispatch(selectedSubscription(apiResponse));
    };
};
