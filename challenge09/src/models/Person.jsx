export class Person {
    constructor(name,amount){
        this.name = name;
        this.amount = amount;
    }
    toString(){
        return `Person (nombre: ${this.name}, amount: ${this.amount})`;
    }
}