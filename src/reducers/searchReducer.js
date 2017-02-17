import * as types from "../actions/actionTypes";

// This is a reducer that expects the action.type = GET_RESULTS_SUCCESS returned by the searchAction...

// We can set the initial state object that will be 
// passed down to the component's mapStateToProps function(state, xxxx) ...
let reducerId = 0;
let actionResults = { hits: { hits: [] } };

export default function searchReducer(state, action) {
    return trackAndCancelPreviousAction(action);
}

function trackAndCancelPreviousAction(action) {
    if (action.type === types.GET_RESULTS_SUCCESS && 
        action.results && 
        action.results.reducerId) {
        if (action.results.reducerId >= reducerId) {
            reducerId = action.results.reducerId;
            actionResults = action.results;
            return actionResults;
        }
    }

    return actionResults;
}