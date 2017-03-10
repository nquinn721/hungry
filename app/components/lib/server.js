import Device from './device';



// Class used to update remote server with user data
export default class Server{
    static initiated = false;
    static dev = true;
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

        this.send();
    }

    static openApp(){
        if(!this.appOpen){
            this.connect();
            this.appOpen = true;
        }
    }

    static closeApp(){
        if(this.appOpen){
            this.disconnect();
            this.appOpen = false;
        }
    }

    static init(){
        this.url = this.dev ? 'http://localhost:3000/' : 'https://hungryserver.herokuapp.com/'
    }

    static login(){
        this.post('login', this.logs.device)
            .then(res => res.json())
            .then(res => res);
    }

    static send(data){
        // fetch(this.url + 'server-dump', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data || {settings: this.logs.settings, logs: this.logs})
        // });
    }
    static connect(){
        this.fetch('connect', this.logs.device.id);
    }
    static disconnect(){
        this.fetch('disconnect', this.logs.device.id);
    }
    static post(endpoint, data){
        return fetch(this.url + endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: typeof data === 'object' ? JSON.stringify(data) : data
        });
    }
}

Server.init();
Server.login();
