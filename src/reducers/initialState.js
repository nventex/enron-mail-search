export const searchState = { 
    hits: { 
        hits: [] 
    },
    indicatorStatus: "hide",
    query: "",
    pageNumber: 0
};

export const readMailState = { _source: { body: "" } };

export const advancedSearchState = {
    hits: { hits: [] },
    indicatorStatus: "hide",
    criteria: {
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
    }
};