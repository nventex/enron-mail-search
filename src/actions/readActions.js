import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

// Called from a React component and returns a type for any reducer that cares about it...
export function readMail(id) {
    return function(dispatch, getState) {
        return searchClient.readMail(id).then(response => {
            let state = getState();
            response.results = state.advancedSearches;
            dispatch(getReadSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getReadSuccess(mail) {
    return { type: types.READ_MAIL_SUCCESS, mail };
}