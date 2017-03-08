import Settings from './settings';

// Class used to update remote server with user data
export default class Server{
    static logs = [];

    static log(data){
        this.logs.push(data);

        // this.send()
    }


    static send(data){
        console.log('SENDING MOFO');
        fetch('https://hungryserver.herokuapp.com/server-dump', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data || {settings: Settings.settings, logs: this.logs})
        });
    }
}