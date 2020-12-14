import Subscription from "./Subscription";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        Subscription: state.selectedSubscription,
    };
};

export default connect(mapStateToProps)(Subscription);