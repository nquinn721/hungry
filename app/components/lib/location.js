import Server from './server';

export default class Location{
    static get(cb){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                Server.log('Position', position);
                cb(position);
            },
            (error) => console.log(error),
            // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

        );
    }
}