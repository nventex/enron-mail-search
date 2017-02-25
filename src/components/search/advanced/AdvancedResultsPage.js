import React from "react";
import { connect } from "react-redux";
import AdvancedResultList from "./AdvancedResultList";

class AdvancedResultsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            pageNumber: 1
        };
    }

    onPaginateClick() {

    }

    render() {
        return (
            <div>
                <AdvancedResultList
                    hits={this.props.searchState.hits}
                />                
            </div>
        );
    }
}

AdvancedResultsPage.propTypes =  {
    searchState: React.PropTypes.object.isRequired
};

// The object returned from the reducer is stored in the state argument and then maps to this.props...
function mapStateToProps(state, ownProps) {
    return {
        // "searches" name must match the reducer in rootReducer...
        searchState: state.advancedSearches
    };
}

// Moves the use of dispatch to this function and centralizes all dispatch calls...
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(advancedSearchActions, dispatch)
//     };
// }

// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=8&mode=live
export default connect(mapStateToProps)(AdvancedResultsPage);