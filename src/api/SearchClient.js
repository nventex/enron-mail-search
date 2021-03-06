import restful, { fetchBackend } from "restful.js";

const template = {
	"file": "enron_searchTemplate",
    "params": {
        "query": "",
        "from": 0
    }
};

const advancedTemplate = {
	"file": "enron_advancedTemplate",
    "params": {}
};

const apiUrl = process.env.API_URL;

class SearchClient {

    static log(criteria) {
        const api = restful(`${apiUrl}/log`, fetchBackend(fetch));

        api.post(criteria)
            .catch(error => {
                throw (error);
            });
    }
    
    static readMail(id) {
        const api = restful(`${apiUrl}/email/${id}`, fetchBackend(fetch));

        return api.get()
            .then((response) => {
                return response.body().data();
            })
            .catch(error => {
                throw (error);
            });
    }
    
    static search(criteria) {

        const api = restful(`${apiUrl}/search`, fetchBackend(fetch));

        template.params.query = criteria.query;
        template.params.from = criteria.pageNumber - 1;

        return api.post(template)
            .then((response) => {
                return response.body().data();
            })
            .catch(error => {
                throw (error);
            });
    }

    static advancedSearch(criteria) {

        const api = restful(`${apiUrl}/search`, fetchBackend(fetch));

        advancedTemplate.params = Object.assign({}, criteria);

        if (advancedTemplate.params.body_terms) {
            advancedTemplate.params.body_terms = criteria.body_terms.split(" ");
        }

        if (advancedTemplate.params.subject_terms) {
            advancedTemplate.params.subject_terms = criteria.subject_terms.split(" ");
        }

        return api.post(advancedTemplate)
            .then((response) => {
                return response.body().data();
            })
            .catch(error => {
                throw (error);
            });
    }
}

export default SearchClient;