////////////////////////
//Auth for bearertoken//
////////////////////////

import AuthReddit from "./auth";

// Fill in your OAuth2 id and secret. And the redericting url to the server where this app is running.
// Don't use for production !! secret is not Save in Browser!!
const redditConstants = {
    client_id: ,
    client_secret: ,
    redirect_url: ,
    scope: {
        read: 'read',
        accout: 'account', 
        identity: 'identity', 
        vote: 'vote'
    }
  };

const Auth = new AuthReddit(redditConstants.client_id, redditConstants.client_secret, redditConstants.redirect_url);
  
  
  
const code = await Auth.getAuthenticationToken();
const authorizationRespond =  await Auth.getAuthorizationToken(code);
const logout = false 
const refreshToken = authorizationRespond.refresh_token;
const bearertoken = authorizationRespond.access_token;



// implementing renewal of token when time is up ==> not implementet jet
function reNewToken() {
    while (!logout) {
        setTimeout(() => {
            authorizationRespond = Auth.refreshAuthToken(refreshToken);
            refreshToken = authorizationRespond.refresh_token;
            bearertoken = authorizationRespond.access_token
        }, (authorizationRespond.expires_in * 1000));
    }
    return  
};



// helps to fetch endpoints
async function fetchHelper(endPoint, method, body) {

    try {
        const request = await fetch(endPoint, {
            method: method,
            headers: {
                'Authorization': `bearer ${bearertoken}`,
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

//////////////////
//API-Endpoints//
/////////////////

export const getEndpoint = {
    feedPosts: {
        best: function() {
            const endpoint = 'https://oauth.reddit.com/best.json';
            const method = 'GET';
                    
            return fetchHelper(endpoint, method);
        },  
        getPostsOf: function(subRedditFullName) {
            const endpoint = 'https://oauth.reddit.com/user/' + subRedditFullName + '/submitted';
            const method = 'GET';

            return fetchHelper(endpoint, method);
        }
    },
        
    info: {
        aboutUser: function(usersFullName) {
            const endpointUrl = 'https://oauth.reddit.com/user/' + usersFullName + '/about';
            const method = 'GET';

            return fetchHelper(endpointUrl, method);
        },
        me: function() {
            const endpointUrl = "https://oauth.reddit.com/api/v1/me";
            const method = 'GET';

            return fetchHelper(endpointUrl, method);
        },
        aboutSubReddit: function(subRedditFullName) {
            const endpointUrl = 'https://oauth.reddit.com/r/' + subRedditFullName + '/about.json'; // not the fullname !!
            const method = 'GET';

            return fetchHelper(endpointUrl, method);
        },
        userSettings: function() {
            const endPoint = 'https://oauth.reddit.com/api/v1/me/prefs';
            const method = 'GET';

            return fetchHelper(endPoint, method);
        }
    },
    comment: {
        getComment: function (articleId) {
            const endpointUrl = 'https://oauth.reddit.com/comments/' + articleId;
            const method = 'GET';

            return fetchHelper(endpointUrl, method);
        }
    },

    search: {
        find: function (searchString) {
            const endPoint = `https://oauth.reddit.com/search?q=${searchString.replace(/ /g, '+')}`;
            const method = 'GET';
                
            return fetchHelper(endPoint, method);
        }
    }
};

export const patch = {
    settings: function(patchedPrefs) {
        const endPoint = 'https://oauth.reddit.com/api/v1/me/prefs';
        const method = 'PATCH';
            
        return fetchHelper(endPoint, method, patchedPrefs);
    }
}

    /*
    Modehashes aren' required when your authenticaded with Oauth.
    NACHSCHLAGEN!!!: x-www-form-urlencoded
    */

export const post = {
    comment: {
        postComment: function (markdown, thingId) {
            const endPoint = 'https://oauth.reddit.com/api/comment';
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
            const endPoint = 'https://oauth.reddit.com/api/vote';
            const body = {
                'dir': votDir,
                'id': thingId,
            }

            return fetchHelper(endPoint, method, body);
        }
    },
    post: {
        submitPost: function (kind, content, title, subReddit) {
            const endPoint = 'https://oauth.reddit.com/api/submit'; // add scope submit
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