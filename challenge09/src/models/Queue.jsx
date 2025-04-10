export class Queue{
    constructor(){
        this.items = []
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        return this.items.length > 0 ? this.items.shift(): null;
    }

    print(){
        return this.items.map(item => item.toString()).join("\n");
    }
    
}