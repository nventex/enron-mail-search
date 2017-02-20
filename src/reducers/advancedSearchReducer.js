import * as types from "../actions/actionTypes";

let actionResults = { hits: { hits: [] } };

export default function advancedSearchReducer(state, action) {
    return handleAction(action);
}

function handleAction(action) {
    switch (action.type) {
        case types.GET_ADVANCED_RESULTS_SUCCESS:
            return action.results;
        
        default:
            return actionResults;
    }
}