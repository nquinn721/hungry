import Device from './device';



// Class used to update remote server with user data
export default class Server{
    static initiated = false;
    static dev = true;
    static saveInterval = false;
    static resendInterval = 100 * 60;
    static dataWaiting;
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
        // this.post('login');
    }


    static connect(){
        if(!this.appOpen){
            this.logs.activity.push({type: 'connect', time: Date.now()});
            this.post('connect', this.logs.activity);
            this.appOpen = true;
        }

    }
    static disconnect(timeInApp){
        // if(this.appOpen){
        //     this.logs.activity.push({type: 'disconnect', time: Date.now()});
        //     this.post('disconnect');
        //     this.appOpen = false;
        // }

    }
    static post(endpoint, data){
        data = this.dataWaiting || data || this.logs;
        console.log(data);

        console.log('SENDING');
        return fetch(this.url + endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log('SERVER RESPONDED');
                clearInterval(this.saveInterval);
                delete this.saveInterval;
                delete this.dataWaiting;
            })
            .catch(res => this.storePostUntilReconnect(data));

    }

    static storePostUntilReconnect(data){
        console.log('storPost')
        this.dataWaiting = data;
        if(!this.saveInterval)
            this.saveInterval = setInterval(() => this.post('server-reconnect', null, true), this.resendInterval);

    }
}

Server.init();
Server.login();
