import Categories from "./Categories";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  let current = state.subscriptions.filter( item => item.id === state.selected );

    return {
        selected: current.length === 0 ? null : current[0],
    };
};

export default connect(mapStateToProps)(Categories);