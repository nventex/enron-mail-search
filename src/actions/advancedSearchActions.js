import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

// Called from a React component and returns a type for any reducer that cares about it...
export function search(searchCriteria) {
    return function(dispatch, getState) {
        return searchClient.advancedSearch(searchCriteria).then(response => {
            let criteria = Object.assign({}, searchCriteria);
            dispatch(getResultsSuccess({ hits: response.hits, searchCriteria: criteria }));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getResultsSuccess(results) {
    return { type: types.GET_ADVANCED_RESULTS_SUCCESS, results };
}