// Endpoints for the Reddit-API


// Helps to simplify the  Endpoint Class

class Endpoint {
    constructor(bearertoken, authObj) {
        this.bearertoken = bearertoken
        this.authObj = authObj
    };

    get bearertoken() {
        return this.bearertoken;
    }

    set bearertoken(newBrearertoken) {
        if (typeof newBrearertoken === 'string') {
            this.bearertoken = newBrearertoken;
            console.log('New bearer is set.');
            return
        }
        console.error('Bearer needs to be a string!');
    }

    async fetchHelper(endPoint, method, body) {
        
        //is the bearer Still valid?
        if(!this.authObj.bearerValid) {
            console.err('Refresh the bearertoken!')
            return 
        }

        try {
            const request = await fetch(endPoint, {
                method: method,
                headers: {
                    'Authorization': `bearer ${this.bearertoken}`,
                    'Content-Type': 'application/json',// additional headder is not allowed in x-orgine-policys
                },
                body: JSON.stringify(body)
                
            });
            const response = await request.json();
            return response;
        } catch (err) {
            console.error(err);
        }
    };

    get = {
        feedPosts: {
            best: function() {
                const endpoint = 'https://oauth.reddit.com' + '/best.json';
                const method = 'GET';
                    
                return fetchHelper(endpoint, method);
            },
            
            getPostsOf: function(subRedditFullName) {
                const endpoint = 'https://oauth.reddit.com' + '/r/' + subRedditFullName + '/new';
                const method = 'GET';

                return fetchHelper(endpoint, method);
            }
        },
        
        info: {
            aboutUser: function(usersFullName) {
                const endpointUrl = 'https://oauth.reddit.com' + '/user/' + usersFullName + '/about';
                const method = 'GET';

                return fetchHelper(endpointUrl, method);
            },
            aboutSubReddit: function(subRedditFullName) {
                const endpointUrl = 'https://oauth.reddit.com' + '/r/' + subRedditFullName + '/about';
                const method = 'GET';

                return fetchHelper(endpointUrl, method);
            },
            userSettings: function() {
                const endPoint = 'https://oauth.reddit.com' + '/api/v1/me/prefs';
                const method = 'GET';

                return fetchHelper(endPoint, method);
            }
        },

        comment: {
            getComment: function (subRedditFullName, articleId) {
                const endpointUrl = 'https://oauth.reddit.com' + '/r/' + subRedditFullName + '/comments/' + articleId;
                const method = 'GET';

                return fetchHelper(endpointUrl, method);
            }
        },

        search: {
            find: function (searchString) {
                const endPoint = 'https://oauth.reddit.com' + `/search?=${searchString.replace(' ', '+')}`;
                const method = 'GET';
                

                return fetchHelper(endPoint, method);
            }
        }
    }

    patch = {
        settings: function(patchedPrefs) {
            const endPoint = 'https://oauth.reddit.com' + '/api/v1/me/prefs';
            const method = 'PATCH';
            
            return fetchHelper(endPoint, method, patchedPrefs);
        }
    }
    /*
    Modehashes aren' required when your authenticaded with Oauth.
    NACHSCHLAGEN!!!: x-www-form-urlencoded
    */
    post = {
        comment: {
            postComment: function (markdown, thingId) {
                const endPoint = 'https://oauth.reddit.com' + '/api/comment';
                const method = 'POST';
                const body = {
                    'api_type': 'json',
                    'return_rtjson': true,
                    'text': markdown,
                    'thing_id': thingId,
                }

                return fetchHelper(endPoint, method, body);
            }
        },

        vote: {
            postVote: function (votdirection, thingId) {
                let votDir
                switch (votdirection) {
                    case 'up':
                        votDir = 1;
                        break;
                    case 'down':
                        votDir = -1;
                        break;
                    case 'none':
                        votDir = 0;
                        break;
                    default:
                        votDir = null;
                }
                const method = 'POST'
                const endPoint = 'https://oauth.reddit.com'  + '/api/vote';
                const body = {
                    'dir': votDir,
                    'id': thingId,
                }

                return fetchHelper(endPoint, method, body);
            }
        },

        post: {
            submitPost: function (kind, content, title, subReddit) {
                const endPoint = 'https://oauth.reddit.com' + '/api/submit'; // add scope submit
                const method = 'POST';
                const body = {
                    'api_type': 'json',
                    'kind': kind,
                    'sr': subReddit,
                    'title': title,
                    'text': content
                }

                return fetchHelper(endPoint, method, body);
            }   
        }
    }

}



export default Endpoint;