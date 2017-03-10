export default class Random{
    static defautMaxNumber = 10;

    static randomNumber(num){
        return Math.round(Math.random() * (num || this.defaultMaxNumber));
    }
}