import { connect } from "react-redux";
import Form from "./Form";
import { postSubscription } from "../../data/actions/api";

let mapDispatchToProps = (dispatch) => {
    return {
        handleAddSubscription: (data) => dispatch(postSubscription(data)),
    };
};

let mapStateToProps = (state) => {
    return {
        form: state.form,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
