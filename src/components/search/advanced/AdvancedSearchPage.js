import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as advancedSearchActions from "../../../actions/advancedSearchActions";
import AdvancedSearchForm from "./AdvancedSearchForm";

// Container component...

class AdvancedSearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        let defaultCriteria = {
            body_match: "", body_terms: "", body_phrase: "",
            subject_match: "", subject_terms: "", subject_phrase: "",
            from_filter: "", to_filter: "", startDate: null, endDate: null
        };

        if (this.props.searchState.searchCriteria) {
            defaultCriteria = Object.assign({}, this.props.searchState.searchCriteria);
        }

        this.state = {
            indicatorStatus: "hide",
            criteria: defaultCriteria
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let state = Object.assign({}, this.props.searchState);
        this.setState(state);
    }    

    onDateChange(id, date) {
        let state = Object.assign({}, this.state);
        state.criteria[id] = date;
        this.setState(state);
    }

    onTextChange(event) {
        let state = Object.assign({}, this.state);
        state.criteria[event.target.id] = event.target.value;
        this.setState(state);
    }

    onSearchClick() {
        this.toggleRefreshIndicator("loading");
        let resp = this.props.actions.search(this.state.criteria);

        resp.then(response => {
            this.toggleRefreshIndicator("hide");
            this.context.router.push(`/advanced/search/1`);
        });
    }

    toggleRefreshIndicator(status) {
        let state = Object.assign({}, this.state);
        state.indicatorStatus = status;
        this.setState(state);
    }

    render() {
        return (
            <AdvancedSearchForm
                onTextChange={this.onTextChange}
                onSearchClick={this.onSearchClick}
                criteria={this.state.criteria}
                onDateChange={this.onDateChange}
                indicatorStatus={this.state.indicatorStatus}
                />
        );
    }
}

AdvancedSearchPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    searchState: React.PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
AdvancedSearchPage.contextTypes = {
    router: React.PropTypes.object
};

// The object returned from the reducer is stored in the state argument and then maps to this.props...
function mapStateToProps(state, ownProps) {
    return {
        // "searches" name must match the reducer in rootReducer...
        searchState: state.advancedSearches
    };
}

// Moves the use of dispatch to this function and centralizes all dispatch calls...
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(advancedSearchActions, dispatch)
    };
}

// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=8&mode=live
export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchPage);