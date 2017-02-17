import delay from "./delay";

const results = [
    {
        "_index": "enron_emails",
        "_type": "email",
        "_id": "AVn8-cR1y9IwY60u5E_X",
        "_score": 1.7568665,
        "_source": {
            "to": "john.lavorato@enron.com",
            "from": "phillip.allen@enron.com",
            "subject": "Re:",
            "date": "2001-05-04T20:51:00.000Z",
            "body": "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nTraveling to have a business meeting takes the fun out of the trip.  Especially if you have to prepare a presentation.  I would suggest holding the business plan meetings here then take a trip without any formal business meetings.  I would even try and get some honest opinions on whether a trip is even desired or necessary.\r\n\r\nAs far as the business meetings, I think it would be more productive to try and stimulate discussions across the different groups about what is working and what is not.  Too often the presenter speaks and the others are quiet just waiting for their turn.   The meetings might be better if held in a round table discussion format.  \r\n\r\nMy suggestion for where to go is Austin.  Play golf and rent a ski boat and jet ski's.  Flying somewhere takes too much time.\r\n"
        }
    },
    {
        "_index": "enron_emails",
        "_type": "email",
        "_id": "AVn8-cR1y9IwY60u5E_Y",
        "_score": 1.7568665,
        "_source": {
            "to": "john.cash@enron.com",
            "from": "phillip.allen@enron.com",
            "subject": "Re:",
            "date": "2001-05-04T20:51:00.000Z",
            "body": "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nTraveling to have a business meeting takes the fun out of the trip.  Especially if you have to prepare a presentation.  I would suggest holding the business plan meetings here then take a trip without any formal business meetings.  I would even try and get some honest opinions on whether a trip is even desired or necessary.\r\n\r\nAs far as the business meetings, I think it would be more productive to try and stimulate discussions across the different groups about what is working and what is not.  Too often the presenter speaks and the others are quiet just waiting for their turn.   The meetings might be better if held in a round table discussion format.  \r\n\r\nMy suggestion for where to go is Austin.  Play golf and rent a ski boat and jet ski's.  Flying somewhere takes too much time.\r\n"
        }
    },
    {
        "_id": "a1",
        "_source": {
            "to": "jack.cash@enron.com",
        }
    },
    {
        "_id": "a2",
        "_source": {
            "to": "jack.bauer@enron.com",
        }
    },
    {
        "_id": "a3",
        "_source": {
            "to": "joe@enron.com",
        }
    },
    {
        "_id": "a4",
        "_source": {
            "to": "bob@enron.com",
        }
    },
    {
        "_id": "a5",
        "_source": {
            "to": "bill@enron.com",
        }
    },
    {
        "_id": "a6",
        "_source": {
            "to": "ryan@enron.com",
        }
    },
    {
        "_id": "a7",
        "_source": {
            "to": "thor@enron.com",
        }
    },
    {
        "_id": "a8",
        "_source": {
            "to": "ironman@enron.com",
        }
    },
    {
        "_id": "a9",
        "_source": {
            "to": "superman@enron.com",
        }
    },
    {
        "_id": "a10",
        "_source": {
            "to": "batman@enron.com",
        }
    },
    {
        "_id": "a11",
        "_source": {
            "to": "wonderwoman@enron.com",
        }
    },
    {
        "_id": "a12",
        "_source": {
            "to": "spiderman@enron.com",
        }
    }
    
];

class SerchResultsApi {
    static search(query) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], results));
            }, delay);
        });
    }
}

export default SerchResultsApi;