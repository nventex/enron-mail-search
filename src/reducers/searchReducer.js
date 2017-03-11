import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

// This is a reducer that expects the action.type = GET_RESULTS_SUCCESS returned by the searchAction...

// We can set the initial state object that will be 
// passed down to the component's mapStateToProps function(state, xxxx) ...
export default function searchReducer(state, action) {
    return handleAction(action);
}

function handleAction(action) {
    switch (action.type) {
        case types.GET_RESULTS_SUCCESS:
            return action.results;

        case types.GET_INITIAL_SEARCH_STATE:
        default:
            return initialState.searchState;
    }
}