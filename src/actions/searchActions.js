import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

// Called from a React component and returns a type for any reducer that cares about it...
export function search(query, pageNumber) {
    return function(dispatch, getState) {
        return searchClient.search(query, pageNumber).then(response => {
            let state = getState();
            dispatch(getResultsSuccess({ hits: response.hits, mail: state.readMail }));
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