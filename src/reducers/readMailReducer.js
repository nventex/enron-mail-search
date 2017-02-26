import * as types from "../actions/actionTypes";

let defaultActionResult = { mail: { _source: { body: "" } } };

export default function readMailReducer(state, action) {
    return handleAction(action);
}

function handleAction(action) {
    switch (action.type) {
        case types.READ_MAIL_SUCCESS:
            return action.mail;
        
        default:
            return defaultActionResult;
    }
}