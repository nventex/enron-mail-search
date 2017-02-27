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

class SearchClient {

    static readMail(id) {
        const api = restful(`https://enron-mail-proxy.herokuapp.com/api/email/${id}`, fetchBackend(fetch));

        return api.get()
            .then((response) => {
                return response.body().data();
            })
            .catch(error => {
                throw (error);
            });
    }
    
    static search(query, pageNumber = 1) {

        const api = restful("https://enron-mail-proxy.herokuapp.com/api/search", fetchBackend(fetch));

        template.params.query = query;
        template.params.from = pageNumber - 1;

        return api.post(template)
            .then((response) => {
                return response.body().data();
            })
            .catch(error => {
                throw (error);
            });
    }

    static advancedSearch(criteria) {

        const api = restful("https://enron-mail-proxy.herokuapp.com/api/search", fetchBackend(fetch));

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