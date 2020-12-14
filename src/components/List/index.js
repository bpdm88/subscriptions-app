import List from "./List";

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        list: state.subscriptions,
    };
};

export default connect(mapStateToProps)(List);