
export class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      return this.items.length > 0 ? this.items.pop() : null;
    }
  
    peek() {
      return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      // Muestra la pila desde el tope hacia abajo
      // El último elemento del array es el tope
      console.log(this.items.slice().reverse());
    }
  }
  