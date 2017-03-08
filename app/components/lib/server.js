
// Class used to update remote server with user data
export default class Server{
    static logs = {};

    static log(event, data){
        this.logs.push({event: event, data: data});
        console.log('SENDING DATA TO SERVER');
        fetch('https://hungryserver.herokuapp.com/server-dump', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.logs)
        });
    }
}