// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://subscriptions-tracker.developme.space/api/subscriptions",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});
