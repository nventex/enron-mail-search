import { combineReducers } from "redux";
import searches from "./searchReducer";
import advancedSearches from "./advancedSearchReducer";
import readMail from "./readMailReducer";

const rootReducer = combineReducers({
    searches,
    advancedSearches,
    readMail
});

export default rootReducer;