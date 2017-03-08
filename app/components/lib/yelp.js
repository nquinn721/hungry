import OAuthSimple from 'oauthsimple';

const consumerKey = "I4GxmlxAqwODPSTfPHR36g";
const consumerSecret = "KAbm1Ixn2Ghtw7KVLY7xzirdt10";
const token = "HrdhEFcmiC9fx-QvbopzhD6J-X7BAPQ3";
const tokenSecret = "8g4Z64_201wEQ74szktPAsPOlHM";

const oauth = new OAuthSimple(consumerKey, tokenSecret);

import Location from './location';

export default class YelpAPI{
    static search(cb){
        Location.get(position => this.requestYelp(position, cb));
    }

    static requestYelp(pos, cb){
        let lat = pos.coords.latitude
        let lng = pos.coords.longitude
        let latlng = "ll=" + String(lat) + "," + String(lng);

        let request = oauth.sign({
            action: "GET",
            path: "https://api.yelp.com/v2/search",
            parameters: "term=happy hour&hours&" + latlng,
            signatures: {api_key: consumerKey, shared_secret: consumerSecret, access_token: token,
                access_secret: tokenSecret},
        });

        fetch(request.signed_url)
            .then(data => data.json())
            .then(data => cb(data.businesses))
            .catch(err => console.error(err));
    }



}