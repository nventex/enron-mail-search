import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

// This is a reducer that expects the action.type = GET_RESULTS_SUCCESS returned by the searchAction...

// We can set the initial state object that will be 
// passed down to the component's mapStateToProps function(state, xxxx) ...
export default function searchReducer(state, action) {
    return handleAction(state, action);
}

function handleAction(state, action) {
    switch (action.type) {
        case types.GET_RESULTS_SUCCESS:
            return handleGetResultsSuccess(state, action);

        case types.GET_INITIAL_SEARCH_STATE:
            return handleGetInitialSearchState(state, action);
        
        default:
            return initialState.searchState;
    }
}

function handleGetInitialSearchState(state, action) {
    let newState = Object.assign({}, initialState.searchState);
    newState.query = state.query;
    return newState;
}

function handleGetResultsSuccess(state, action) {
    let newState = Object.assign({}, state);
    newState.query = action.data.criteria.query;
    newState.pageNumber = action.data.criteria.pageNumber;
    newState.hits = action.data.response.hits;

    return newState;
}