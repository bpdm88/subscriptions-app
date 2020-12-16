import { connect } from "react-redux";
import Form from "./Form";
import { postSubscription } from "../../data/actions/api";

let mapDispatchToProps = (dispatch) => {
    return {
        handleAddSubscription: (data) => dispatch(postSubscription(data)),
    };
};

export default connect(null, mapDispatchToProps)(Form);
