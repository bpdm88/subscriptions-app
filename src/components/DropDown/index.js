import DropDown from "./DropDown";

import { connect } from "react-redux";
import { categoryFilter, dropDownState } from "../../data/actions/state";

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
        dropDownContent: state.dropDown,
        selectedCategories: state.categoryFilter,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        categoryClick: (category) => dispatch(categoryFilter(category)),
        dropDownClick: (category) => dispatch(dropDownState()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(DropDown);