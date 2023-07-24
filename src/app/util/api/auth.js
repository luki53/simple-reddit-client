import { v4 as uuidv4 } from 'uuid';
// Getting and Refreshing Acc Token

class AuthReddit {

    constructor( client_id, client_secret, redirect_url) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.redirect_url = redirect_url;
        this.baseUrl = 'https://www.reddit.com/api/';
        this.authEndpoint = 'v1/authorize?';
    };

    getAuthUrl(uuidStr) {

        //Wichtig!! es muss kein fetch ausgeführt werden, da man auf die Seite des OAthu2 anbieters geleitet wird.
        const authUrl = this.baseUrl + 
            this.authEndpoint + 
            'client_id=' + 
            this.client_id + 
            '&response_type=code&state=' + 
            uuidStr + '&redirect_uri=' + 
            this.redirect_url + 
            '&duration=permanent&scope=read,account,identity,vote';
        return authUrl;    
    }

    getAuthenticationToken() {
        //get state, code and refreshToken
        const state = window.localStorage.getItem('state');
        const redirectCallback = new URLSearchParams(window.location.search); // window.locaition ist ein Object 
        const stateCallback = redirectCallback.get('state');
        const code = redirectCallback.get('code');
    
        //Is the call a valid callback ? 
        if (state === stateCallback && state) {
            window.localStorage.removeItem('state');
            localStorage.setItem('code',code);
            return code;
        }
    
        // Redirect to Authetification url
        const uuidStr = uuidv4();
        window.localStorage.setItem('state', uuidStr);
        window.location = this.getAuthUrl(uuidStr);
        return 
    }

    async getAuthorizationToken (code) {
        if(code) {
            try {
                const request = await fetch("https://ssl.reddit.com/api/v1/access_token", {
                    method: 'POST',
                    headers: {
                        'Authorization': `Basic ${btoa(this.client_id +':' + this.client_secret)}`,
                        'Content-Type': 'application/x-www-form-urlencoded' //
                    },
                    body: 'grant_type=authorization_code&code=' + code + '&redirect_uri=' + this.redirect_url,
                });
                const response = await request.json();
                return response;
            } catch (err) {
                console.log(err);
            }
        }
        return ;
    }

    async refreshAuthToken(refresh_token) {
        const body = `grant_type=refresh_token&refresh_token=${refresh_token}`;
    
        try {    
            const request = await fetch('https://www.reddit.com/api/v1/access_token',{
                method: 'POST',
                body: body
            });
            const response = await request.json();
            return response
        } catch (err) {
            console.error(err);
        }
    }
};

export default AuthReddit;