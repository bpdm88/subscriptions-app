import TrafficLight from "./TrafficLight";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        payment_date: state.payment_date,
    };
};

export default connect(mapStateToProps)(TrafficLight);
