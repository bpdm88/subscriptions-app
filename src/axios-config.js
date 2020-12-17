// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://ec2-52-56-81-99.eu-west-2.compute.amazonaws.com/api/subscriptions/",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});