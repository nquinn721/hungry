import Store from './store';
import Server from './server';
// console.log(Server);

export default class Settings{

    static settings = {
        distance: {
            current: 5,
            list: [5, 10, 15, 20, 25]
        },
        mealTime: {
            current: 60,
            list: [30, 60, 90, 120]
        },
        mealCategory: {
            current: 'Breakfast',
            list: ['Breakfast', 'Lunch', 'Dinner', 'Late Night']
        },
        event: {
            current: 'Daily',
            list: ['Daily', 'Work Wednesday']
        },
        customMealCategories: [],
        foodInterests: ['spanish', 'italian', 'american', 'indian', 'chinese', 'japanese'],


        //Item Management
        removeItemAfterShake: true,
        refreshItemsWhenListExhausted: true,
        refreshItemsOnInterval: false
    }



    static getNext(category){
        let cat = this.settings[category];
        let list = cat.list;
        let current = cat.current;

        let m = list.indexOf(current);

        m++;
        m = m === list.length ? 0 : m;

        cat.current = list[m];

        this.logChangedSetting(category, current, cat.current);
        this.update();
        return cat.current;
    }

    static logChangedSetting(setting, before, after){
        Server.log('activity', {type: 'Update ' + setting, values: [before, after]});
        Server.log('settings', this);
    }
    static update(){
        Store.set('settings', this.settings);
    }

    static get(){
        return Store.get('settings').then(v => Object.assign(this.settings, v));
    }

}
