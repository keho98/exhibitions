let API_ENDPOINT = "https://www.googleapis.com/customsearch/v1"
let API_KEY = "AIzaSyAOSQT-NDfs6K0LZK4QGry8KRWJa3zMF6o"
let CUSTOM_SEARCH_ID = "010089620534719384784:xjo7framvq0"

class SimpleSearch {
    static execute(queryString, handler) {
        let queryData = {
            key: API_KEY,
            cx: CUSTOM_SEARCH_ID,
            searchType: "image",
            fileType: "gif",
            q: queryString
        }

        $.get(API_ENDPOINT, queryData, function(result) {
            handler(result.items[0].link)
        })
    }
}