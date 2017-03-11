import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function advancedSearchReducer(state, action) {
    return handleAction(state, action);
}

function handleAction(state, action) {
    switch (action.type) {
        case types.GET_ADVANCED_RESULTS_SUCCESS:
            return getAdvancedResultsSuccess(state, action);

        default:
            return initialState.advancedSearchState;
    }
}

function getAdvancedResultsSuccess(state, action) {
    let newState = Object.assign({}, initialState.advancedSearchState);
    let newCriteria = Object.assign({}, action.data.criteria);
    newState.criteria = newCriteria;
    newState.hits = action.data.response.hits;
    return newState;
}