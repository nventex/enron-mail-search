import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

// Called from a React component and returns a type for any reducer that cares about it...
export function readMail(readItem) {
    return function(dispatch, getState) {
        searchClient.log(readItem);
        
        return searchClient.readMail(readItem.email_id).then(response => {
            let state = getState();
            // Recycle the state so that the SearchPage and AdvancedSearchPage component receive the props in case user navigates back...
            response.advancedSearchResults = state.advancedSearches;
            response.searchResults = state.searches;
            dispatch(getReadSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getReadSuccess(mail) {
    return { type: types.READ_MAIL_SUCCESS, mail };
}