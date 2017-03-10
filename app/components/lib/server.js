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

    log(event, data){
        data.time = new Date.now();

        if(typeof this.logs[event] === 'object')
            this.logs[event].push(data);
        else this.logs[event] = data;
    }

    static send(data){
        fetch(this.dev ? 'localhost:3000/server-dump' : 'https://hungryserver.herokuapp.com/server-dump', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data || {settings: Settings.settings, logs: this.logs})
        });
    }
}