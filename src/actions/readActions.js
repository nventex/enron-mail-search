import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

// Called from a React component and returns a type for any reducer that cares about it...
export function readMail(readItem) {
    return function(dispatch, getState) {
        
        if (process.env.NODE_ENV === "production") {
            searchClient.log(readItem);
        }
        
        return searchClient.readMail(readItem.email_id).then(response => {
            dispatch(getReadSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getReadSuccess(mail) {
    return { type: types.READ_MAIL_SUCCESS, mail };
}