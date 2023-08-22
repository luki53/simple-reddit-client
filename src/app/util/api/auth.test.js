import AuthReddit from "./auth";

const redditConstants = {
    client_id: 'nwcbzyKlbvXb2uH0WpFtrA',
    client_secret: 'g0qsVxuJ17EQRWH98i4PN9p-wpUZdA',
    redirect_url: 'http://localhost:3000',
    scope: {
        read: 'read',
        accout: 'account', // for updating personal pref
        identity: 'identity', //for getting prefs
        vote: 'vote'
    }
  };

const Auth = new AuthReddit(redditConstants.client_id, redditConstants.client_secret, redditConstants.redirect_url);

test('Returns the appropriate url for 2oauth', () => {
    const url = Auth.getAuthUrl('aString');
    const authUrl = 'https://www.reddit.com/api/v1/authorize?client_id=nwcbzyKlbvXb2uH0WpFtrA&response_type=code&state=aString&redirect_uri=http://localhost:3000&duration=permanent&scope=read,account,identity,vote';

    expect(url).toBe(authUrl);
});