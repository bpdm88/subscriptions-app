import Subscription from "./Subscription";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    let current = state.subscriptions.filter( item => item.id === state.selected );

    let reduced = state.subscriptions.reduce(( obj, item ) => {
        if(item.id === state.selected){
            return item;
        }
    },{});

    return {
        data: state.subscriptions,
        selected: current,
    };
};

export default connect(mapStateToProps)(Subscription);