import List from "./List";

import { connect } from "react-redux";
import { getSubscription } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        list: state.subscriptions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(getSubscription()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
