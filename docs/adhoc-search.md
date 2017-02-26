POST enron_emails2/_search
{
    "query" : {
        "constant_score": {
          "filter": {
            "term" : { "to" : "randall.gay@enron.com" }
          }
        }
    }
}