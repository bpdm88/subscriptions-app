import Subscription from "./Subscription";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    let current = state.subscriptions.filter( item => item.id === state.selected );

    return {
        selected: current,
    };
};

export default connect(mapStateToProps)(Subscription);