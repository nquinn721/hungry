import Store from './store';
import Server from './server';


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
        foodInterests: ['spanish', 'italian', 'american', 'indian', 'chinese', 'japanese']
    }



    static getNext(category){
        console.log(category);
        let cat = this.settings[category];
        let list = cat.list;
        let current = cat.current;

        let m = list.indexOf(current);

        m++;
        m = m === list.length ? 0 : m;

        cat.current = list[m];


        this.update();
        console.log(this.settings[category]);
        return cat.current;
    }


    static update(){
        Store.set('settings', this.settings);
        Server.log('Update Settings', this.settings);
    }

    static get(){
        return Store.get('settings').then(v => Object.assign(this.settings, v));
    }

}
