
export default class List{
    items;
    defaultItems;

    constructor(items){
        this.items = items;
        this.defaultItems = items;
    }

    removeItem(item){
        if(typeof item === 'Object')
            this.items.splice(this.items.indexOf(item), 1);
        else
            this.items.splice(item, 1);
    }

    reset(){
        this.items = this.defaultItems;
    }

}