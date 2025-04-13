// Clase Nodo para la lista doblemente enlazada
class DoublyNode {
    constructor(value, prev = null, next = null) {
      this.value = value
      this.prev = prev
      this.next = next
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null
      this.tail = null
      this.size = 0
      this.current = null // Para la "página" actual
    }
  
    // Agregar un valor al final de la lista
    add(value) {
      const newNode = new DoublyNode(value)
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.current = newNode
      } else {
        // Agregar al final
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      }
      this.size++
    }
  
    // Mover hacia adelante
    goForward() {
      if (this.current && this.current.next) {
        this.current = this.current.next
        return this.current.value
      }
      return null
    }
  
    // Mover hacia atrás
    goBack() {
      if (this.current && this.current.prev) {
        this.current = this.current.prev
        return this.current.value
      }
      return null
    }
  
    // Obtener el valor actual
    getCurrentValue() {
      return this.current ? this.current.value : null
    }
  
    // Reiniciar al inicio
    resetToHead() {
      this.current = this.head
      return this.getCurrentValue()
    }
  
    // Ir al final
    resetToTail() {
      this.current = this.tail
      return this.getCurrentValue()
    }
  }
  
  export default DoublyLinkedList