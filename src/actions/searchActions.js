import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

let actionId = 0;

function getActionId() {
    if (actionId > 100) {
        actionId = 0;
    }
    return ++actionId;
}

// Called from a React component and returns a type for any reducer that cares about it...
export function search(query, pageNumber) {
    let reducerId = getActionId();
    return function(dispatch, getState) {
        return searchClient.search(query, pageNumber).then(response => {
            dispatch(getResultsSuccess({ hits: response.hits, reducerId }));
        }).catch(error => {
            throw(error);
        });
    };
}

// Find the reducer that uses the "type=GET_RESULTS_SUCCESS""
// It's returning an action type and the data...
export function getResultsSuccess(results = {}) {
    return { type: types.GET_RESULTS_SUCCESS, results };
}

export function getDefaultResults() {
    let reducerId = getActionId();
    return function(dispatch, getState) {
        return new Promise((resolve, reject) => {
            resolve({ hits: { hits: [] }});
        }).then(response => {
            dispatch(getResultsSuccess({ hits: response.hits, reducerId }));
        });
    };
}