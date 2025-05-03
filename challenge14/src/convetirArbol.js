export const convertirArbol = (nodo) => {
    if (!nodo) return null;
  
    const node = { name: `${nodo.valor}` };
    const children = [];
  
    if (nodo.izquierda) children.push(convertirArbol(nodo.izquierda));
    if (nodo.derecha) children.push(convertirArbol(nodo.derecha));
  
    if (children.length > 0) node.children = children;
  
    return node;
  };
  