import restful , { fetchBackend } from "restful.js";

const template = {
    "_source": ["to", "from", "subject", "date"],
    "from": 0,
    "size": 15,
    "query": {
        "match": { "body": "migrate" }
    },
    "highlight": {
        "fields": {
            "body": {
                "fragment_size": 75,
                "number_of_fragments": 3
            }
        }
    }
};

class SearchClient {

    static search(query, pageNumber = 1) {

        const api = restful("http://192.168.0.194:9200/enron_emails/_search", fetchBackend(fetch));
        
        template.query.match.body = query;
        template.from = pageNumber - 1;

        return api.post(template)
        .then((response) => {
            return response.body().data();
        })
        .catch(error => {
            throw(error);
        });
    }
}

export default SearchClient;