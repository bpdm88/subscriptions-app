import List from "./List";

import { connect } from "react-redux";
import { getSubscriptions } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        list: state.subscriptions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(getSubscriptions()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
