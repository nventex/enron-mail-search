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

        this.state = {
            indicatorStatus: "hide",
            errors: {},
            query: "",
            pageNumber: 1
        };

        this.onQueryChange = this.onQueryChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onPaginateClick = this.onPaginateClick.bind(this);
        this.onReadMailClick = this.onReadMailClick.bind(this);
        this.onBrowserButtonNavigation = this.onBrowserButtonNavigation.bind(this);
    }

    componentDidMount() {
        window.onpopstate = this.onBrowserButtonNavigation;

        // For cases where someone bookmarked a search query...
        this.onPageLoadAndButtonNavigation();
    }

    onBrowserButtonNavigation(event) {
        this.onPageLoadAndButtonNavigation();
    }

    onPageLoadAndButtonNavigation() {
        this.beginSearch(this.props.params.query, this.props.params.pageNumber);
    }

    setQueryUsingParams() {
        let state = Object.assign({}, this.state);
        state.query = this.props.params.query || "";
        state.pageNumber = parseInt(this.props.params.pageNumber) || 1;
        this.setState(state);
    }

    onQueryChange(event) {
        let state = Object.assign({}, this.state);
        state.query = event.target.value;
        this.setState(state);
    }

    onSearchClick(event) {
        event.preventDefault();
        let query = this.state.query;
        this.beginSearch(query, 1);
    }

    onPaginateClick(data) {
        event.preventDefault();
        let pageNumber = data.selected + 1;
        let query = this.state.query;
        this.beginSearch(query, pageNumber);
    }

    onReadMailClick(id) {
        this.props.readActions.readMail(id).then(response => {
            this.context.router.push(`/mail/${id}`);    
        });
    }

    beginSearch(query, pageNumber) {
        this.toggleRefreshIndicator("loading");
        const searchPromise = (query) ? this.props.actions.search(query, pageNumber) : this.props.actions.getDefaultResults();

        searchPromise.then((response) => {
            this.toggleRefreshIndicator("hide");
            
            if (query && pageNumber) {
                this.context.router.push(`/search/${query}/${pageNumber}`);
            }
            this.setQueryUsingParams();
        });
    }

    toggleRefreshIndicator(status) {
        let state = Object.assign({}, this.state);
        state.indicatorStatus = status;
        this.setState(state);
    }

    render() {
        return (
            <div>
                <SearchForm
                    query={this.state.query}
                    errors={this.state.errors}
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
    readActions: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    searchState: React.PropTypes.object.isRequired
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
        actions: bindActionCreators(searchActions, dispatch),
        readActions: bindActionCreators(readActions, dispatch)
    };
}

// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=8&mode=live
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);