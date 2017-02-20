import * as types from "./actionTypes";
import searchClient from "../api/SearchClient";

let defaultResults = {
    total: 1, 
    hits: [
        {
            _id: "asdf",
            _source: {
                subject: "very cool"
            },
            highlight: {
                body: [
                    "test 1",
                    "test 2",
                    "test 3"
                ]
            }
        }
    ]
};

// Called from a React component and returns a type for any reducer that cares about it...
export function search(criteria) {
    return getResultsSuccess({ hits: defaultResults });

    // return function(dispatch, getState) {
    //     return searchClient.advancedSearch(criteria).then(response => {
    //         dispatch(getResultsSuccess({ hits: response.hits }));
    //     }).catch(error => {
    //         throw(error);
    //     });
    // };
}

export function getResultsSuccess(results) {
    return { type: types.GET_ADVANCED_RESULTS_SUCCESS, results };
}