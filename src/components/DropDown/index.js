import DropDown from "./DropDown";

import { connect } from "react-redux";
import { selected } from "../../data/actions/state";

const mapStateToProps = (state) => {
    //get all subscriptions
    const { subscriptions } = state;
    //reduce down all the categories accross subscriptions into a list without dubplicates
    let categories = subscriptions.reduce(( array, item ) => {
        let categoriesList = item.categories;
        let unique = categoriesList.filter( item => !array.includes(item));
        array.push(...unique);
        return array;
    },[]);

    return {
        categories: categories,
    };
};

export default connect(mapStateToProps)(DropDown);