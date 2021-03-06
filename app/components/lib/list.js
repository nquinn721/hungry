import Random from './random';

export default class List{
    items;
    defaultItems;

    constructor(items){
        this.items = items;
        this.defaultItems = items;
    }

    random(){
        return this.getItem(Random.randomNumber(this.items.length));
    }

    getItem(item){
        var i;
        if(typeof item === 'Object')
            i = this.items.splice(this.items.indexOf(item), 1);
        else
            i = this.items.splice(item, 1);
        return i;
    }

    reset(){
        this.items = this.defaultItems;
    }

}