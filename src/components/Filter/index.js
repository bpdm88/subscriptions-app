import Filter from "./Filter";

import { connect } from "react-redux";
import { selectFilter, filterByPayment, filterByCancel } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        filterContent: state.filterContent,
        dropDown: state.dropDown,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        filterPaymentClicked: () => dispatch(filterByPayment()),
        filterCancelClicked: () => dispatch(filterByCancel()),
        filterClick: () => dispatch(selectFilter()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Filter);

