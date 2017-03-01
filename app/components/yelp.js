import OAuthSimple from 'oauthsimple';

const consumerKey = "I4GxmlxAqwODPSTfPHR36g";
const consumerSecret = "KAbm1Ixn2Ghtw7KVLY7xzirdt10";
const token = "HrdhEFcmiC9fx-QvbopzhD6J-X7BAPQ3";
const tokenSecret = "8g4Z64_201wEQ74szktPAsPOlHM";

const oauth = new OAuthSimple(consumerKey, tokenSecret);

import Location from './location';

export default class YelpAPI{
    search(cb){
        Location.get(position => this.requestYelp(position, cb));
    }

    requestYelp(pos, cb){
        let lat = pos.coords.latitude
        let lng = pos.coords.longitude
        let latlng = "ll=" + String(lat) + "," + String(lng);

        let request = oauth.sign({
            action: "GET",
            path: "https://api.yelp.com/v2/search",
            parameters: "term=fast food&" + latlng,
            signatures: {api_key: consumerKey, shared_secret: consumerSecret, access_token: token,
                access_secret: tokenSecret},
        });

        fetch(request.signed_url)
            .then(data => data.json())
            .then(data => cb(data.businesses))
            .catch(err => console.error(err));
    }

    get(){
        this.search( yelpData => {
            console.log('getting yelp data', yelpData);
            yelpData = ds.cloneWithRows(yelpData);
            this.setState({yelpData});

        });
    }

    renderYelpList(data, i){
        return(
            <View style={styles.item} key={i}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: data.image_url}}
                />
                <Text style={styles.business}>{data.name}</Text>
            </View>
        );
    }

    getList(){
        return (<ListView
            dataSource={this.state.yelpData}
            renderRow={this.renderYelpData.bind(this)}
        />)
    }
}