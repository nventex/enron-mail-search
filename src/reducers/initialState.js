export const searchState = { 
    hits: { 
        hits: [] 
    },
    indicatorStatus: "hide",
    query: "",
    pageNumber: 1
};

export const readMailState = { _source: { body: "" } };

export const advancedSearchState = {
    body_match: "", 
    body_terms: "", 
    body_phrase: "",
    subject_match: "", 
    subject_terms: "", 
    subject_phrase: "",
    from_filter: "", 
    to_filter: "", 
    startDate: null, 
    endDate: null
};