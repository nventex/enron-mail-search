import * as types from "../actions/actionTypes";

// This is a reducer that expects the action.type = GET_RESULTS_SUCCESS returned by the searchAction...

// We can set the initial state object that will be 
// passed down to the component's mapStateToProps function(state, xxxx) ...
let actionResults = { hits: { hits: [] } };

export default function searchReducer(state, action) {
    return handleAction(action);
}

function handleAction(action) {
    switch (action.type) {
        case types.GET_RESULTS_SUCCESS:
            return action.results;

        // Needs to be recycled back to the SearchPage in case user navigates back..
        case types.READ_MAIL_SUCCESS:
            return action.mail.searchResults;

        default:
            return actionResults;
    }
}