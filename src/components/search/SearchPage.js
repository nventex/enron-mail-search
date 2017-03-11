import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchActions from "../../actions/searchActions";
import * as readActions from "../../actions/readActions";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

// Container component...

class SearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // Initialize state data using initialState.js
        this.state = Object.assign({}, props.searchState);

        this.onQueryChange = this.onQueryChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onPaginateClick = this.onPaginateClick.bind(this);
        this.onReadMailClick = this.onReadMailClick.bind(this);
        this.onBrowserButtonNavigation = this.onBrowserButtonNavigation.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.state = Object.assign({}, nextProps.searchState);
    }

    componentDidMount() {
        // Handle cases when navigating back and forward...
        window.onpopstate = this.onBrowserButtonNavigation;

        // Handle cases when a search result is directly accessed (ie: bookmarked)...
        this.onPageLoadAndButtonNavigation();
    }

    onBrowserButtonNavigation(event) {
        this.onPageLoadAndButtonNavigation();
    }

    onPageLoadAndButtonNavigation() {
        if (this.hasUriParams()) {
            this.search(this.props.params.query, this.props.params.pageNumber);
        }
        else {
             this.props.actions.getInitialState();
        }
    }

    hasUriParams() {
        // Should only search when the current pathname is /search/sometext
        let currentLocation = this.props.router.getCurrentLocation();
        let regex = /search\/[a-zA-Z]+\/\d+/;
        return currentLocation.pathname && currentLocation.pathname.match(regex);
    }

    onQueryChange(event) {
        let state = Object.assign({}, this.state);
        state.query = event.target.value;
        this.setState(state);
    }

    onSearchClick(event) {
        event.preventDefault();
        let query = this.state.query;
        this.search(query, 1);
    }

    onPaginateClick(data) {
        event.preventDefault();
        let pageNumber = data.selected + 1;
        let query = this.state.query;
        this.search(query, pageNumber);
    }

    search(query, pageNumber) {
        this.toggleRefreshIndicator("loading");
        pageNumber = parseInt(pageNumber);

        const searchPromise = this.props.actions.search({ query, pageNumber });

        searchPromise.then((response) => {
            this.toggleRefreshIndicator("hide");
            
            this.context.router.push(`/search/${query}/${pageNumber}`);
        });
    }

    toggleRefreshIndicator(status) {
        let state = Object.assign({}, this.state);
        state.indicatorStatus = status;
        this.setState(state);
    }

    onReadMailClick(id) {
        let pushData =
        {
            pathname: `/mail/${id}`,
            state: {
                query: this.props.params.query,
                page_number: this.props.params.pageNumber
            }
        };        

        this.context.router.push(pushData);
    }

    render() {
        return (
            <div>
                <SearchForm
                    query={this.state.query}
                    onQueryChange={this.onQueryChange}
                    onSearchClick={this.onSearchClick}
                    indicatorStatus={this.state.indicatorStatus} />
                <ResultList
                    onReadMailClick={this.onReadMailClick}
                    results={this.props.searchState.hits.hits}
                    onPaginateClick={this.onPaginateClick}
                    pageNumber={this.state.pageNumber}
                    totalCount={this.props.searchState.hits.total || 0} />
            </div>
        );
    }
}

SearchPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    searchState: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
SearchPage.contextTypes = {
    router: React.PropTypes.object
};

// The object returned from the reducer is stored in the state argument and then maps to this.props...
function mapStateToProps(state, ownProps) {
    
    return {
        // "searches" name must match the reducer in rootReducer...
        searchState: state.searches
    };
}

// Moves the use of dispatch to this function and centralizes all dispatch calls...
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(searchActions, dispatch)
    };
}

// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=8&mode=live
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);