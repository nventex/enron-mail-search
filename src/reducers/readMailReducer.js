import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function readMailReducer(state, action) {
    return handleAction(action);
}

function handleAction(action) {
    switch (action.type) {
        case types.READ_MAIL_SUCCESS:
            return action.mail;
        
        default:
            return initialState.readMailState;
    }
}