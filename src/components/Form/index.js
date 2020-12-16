import { connect } from "react-redux";
import Form from "./Form";

let mapDispatchtoProps = (dispatch) => {
    return {
        handleAddSubscription: (data) => dispatch(postSubscription(data)),
    };
};

export default connect(null, mapDispatchToProps)(Form);
