import Subscription from "./Subscription";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.subscription,
    };
};

export default connect(mapStateToProps)(Subscription);