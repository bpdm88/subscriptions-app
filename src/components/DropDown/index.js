import DropDown from "./DropDown";

import { connect } from "react-redux";
import { selected } from "../../data/actions/state";

const mapStateToProps = (state) => {
    let subscriptions = state.subscriptions;
    let categories = subscriptions.reduce(( array, item ) => {
        let categories = item.categories;
        array.push(...categories);
        return array;
    },[]);
    console.log(categories);
    return {
        categories: categories,
    };
};

export default connect(mapStateToProps)(DropDown);