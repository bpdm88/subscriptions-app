import List from "./List";

import { connect } from "react-redux";
import { selected, setForm } from "../../data/actions/state";
import { getSubscriptions } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        list: state.subscriptions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelected: (id) => dispatch(selected(id)),
        handleLoad: () => dispatch(getSubscriptions()),
        displayForm: () => dispatch(setForm()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
