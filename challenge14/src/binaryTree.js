class Node {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

class BinaryTree {
  constructor() {
    this.raiz = null;
  }

  insertar(valor) {
    const nuevoNodo = new Node(valor);
    if (!this.raiz) {
      this.raiz = nuevoNodo;
      return;
    }

    let actual = this.raiz;
    while (true) {
      if (valor < actual.valor) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo;
          return;
        }
        actual = actual.izquierda;
      } else {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo;
          return;
        }
        actual = actual.derecha;
      }
    }
  }

  inOrden(nodo = this.raiz) {
    if (!nodo) return;
    this.inOrden(nodo.izquierda);
    console.log(nodo.valor);
    this.inOrden(nodo.derecha);
  }

  postOrden(nodo = this.raiz) {
    if (!nodo) return;
    this.postOrden(nodo.izquierda);
    this.postOrden(nodo.derecha);
    console.log(nodo.valor);
  }

  preOrden(nodo = this.raiz) {
    if (!nodo) return;
    console.log(nodo.valor);
    this.preOrden(nodo.izquierda);
    this.preOrden(nodo.derecha);
  }

  contiene(valor, nodo = this.raiz) {
    if (!nodo) return false;
    if (valor === nodo.valor) return true;
    if (valor < nodo.valor) return this.contiene(valor, nodo.izquierda);
    return this.contiene(valor, nodo.derecha);
  }
}

export default BinaryTree;
