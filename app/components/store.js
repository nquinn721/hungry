import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});


export default class Store{
    static set(key, val){
        storage.save({
            key: key,
            rawData: val

        });
    }
    static get(key){
        return storage.load({
            key: key,
            autoSync: true,
            syncInBackground: true,
        }).catch(err => this.handleError(err));
    }

    static handleError(err){
        // console.error(err);
    }
}



