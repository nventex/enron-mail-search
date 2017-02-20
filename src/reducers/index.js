import { combineReducers } from "redux";
import searches from "./searchReducer";
import advancedSearches from "./advancedSearchReducer";

const rootReducer = combineReducers({
    searches,
    advancedSearches
});

export default rootReducer;