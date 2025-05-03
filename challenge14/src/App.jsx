import BinaryTree from './binaryTree';
import { convertirArbol } from './convetirArbol';
import TreeViewer from './TreeViewer';

const App = () => {
  const arbol = new BinaryTree();
  const valores = [10, 5, 15, 2, 7, 20];

  valores.forEach(v => arbol.insertar(v));

  console.log("InOrden:");
  arbol.inOrden();

  console.log("PostOrden:");
  arbol.postOrden();

  console.log("PreOrden:");
  arbol.preOrden();


  console.log("¿El valor 7 está en el árbol?", arbol.contiene(7)); // true
  console.log("¿El valor 99 está en el árbol?", arbol.contiene(99)); // false

  const visualData = convertirArbol(arbol.raiz);

  return(
    <div>
      <h1>Revisa la consola</h1>
      <h2>Árbol Binario Visual</h2>
      <TreeViewer data={visualData} />
    </div>
  ) ;
};

export default App;
