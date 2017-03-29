import Device from './device';



// Class used to update remote server with user data
export default class Server{
    static initiated = false;
    static dev = true;
    static saveIntervals = false;
    static dataToSendOnReconnect = {};
    static logs = {
        activity: [],
        user: null,
        restaurants: null,
        settings: null,
        locations: [],
        device: new Device
    };
    static appOpen;

    static log(event, data){
        data.time = Date.now();

        if(this.logs[event] instanceof Array)
            this.logs[event].push(data);
        else this.logs[event] = data;

    }

    static openApp(){
        if(!this.appOpen){
            this.connect();
            this.appOpen = true;
        }
    }

    static closeApp(){
        console.log('this app open', this.appOpen);
        if(this.appOpen){
            this.disconnect();
            this.appOpen = false;
        }
    }

    static init(){
        this.url = this.dev ? 'http://localhost:3000/' : 'https://hungryserver.herokuapp.com/'
    }

    static login(){
        this.appOpen = true;
        this.post('login', this.logs.device);
    }


    static connect(){
        this.post('connect', this.logs.device.id);
    }
    static disconnect(){
        this.post('disconnect', this.logs.device.id);
    }
    static post(endpoint, data, interval){
        var d = JSON.stringify({data}),
            self = this;

        d = typeof data === 'object' ? JSON.stringify(data) : d;

        console.log('SENDING');
        return fetch(this.url + endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: d
        })
            .then(res => {
                console.log('SERVER RESPONDED');
                if(interval){
                    clearInterval(self.saveIntervals);
                    delete self.saveIntervals;
                    this.dataToSendOnReconnect = {};
                }
            })
            .catch(res => this.storePostUntilReconnect(endpoint, d, interval));

    }

    static storePostUntilReconnect(endpoint, data, interval){
        var self = this;
        interval = interval || Date.now();

        if(endpoint !== 'server-reconnect')
            this.dataToSendOnReconnect[interval] = {endpoint, data, interval};

        if(!this.saveIntervals)
            this.saveIntervals = setInterval(() => this.post('server-reconnect', this.dataToSendOnReconnect, true), 100 * 60);

    }
}

Server.init();
Server.login();
