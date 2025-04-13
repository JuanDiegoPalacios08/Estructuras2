class Node {
    constructor(value,next = null){
        this.value = value
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
        this.current = null
    }

    add(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.current = this.head
        }else{
            let temp = this.head
            while(temp.next){
                temp = temp.next
            }
            temp.next = newNode
        }
        this.size++
    }

    next() {
        if (this.current && this.current.next) {
          this.current = this.current.next
          return this.current.value
        }
        return null // No hay siguiente
      }

      // Reiniciar la posición al inicio
  resetToHead() {
    this.current = this.head
    return this.current ? this.current.value : null
  }

  // Obtener el valor actual
  getCurrentValue() {
    return this.current ? this.current.value : null
  }
}

export default LinkedList
