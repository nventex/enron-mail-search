import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

// Called from a React component and returns a type for any reducer that cares about it...
export function search(criteria) {
    return function(dispatch, getState) {
        return searchClient.search(criteria).then(response => {
            dispatch(getResultsSuccess({response, criteria}));
        }).catch(error => {
            throw(error);
        });
    };
}

// Find the reducer that uses the "type=GET_RESULTS_SUCCESS""
// It's returning an action type and the data...
export function getResultsSuccess(data) {
    return { type: types.GET_RESULTS_SUCCESS, data };
}

export function getInitialState() {
    return { type: types.GET_INITIAL_SEARCH_STATE };
}