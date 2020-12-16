import Button from "./Button";

import { connect } from "react-redux";
import { apiDelete } from "../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: ( id ) => dispatch(apiDelete( id )),
    };
};

export default connect(null, mapDispatchToProps)(Button);