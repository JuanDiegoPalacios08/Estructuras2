import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { menuTree } from "./menuData"
import Sidebar from "./components/Sidebar"

function renderRoutes(tree){
  let routes=[];

  function traverse(nodes){
    for (const node of nodes){
      if (node.component) {
        routes.push(<Route key={node.link} path={node.link} element={<node.component/>}/>);
      }
      if (node.children?.length) traverse(node.children); 
    } 
  }
  traverse(tree);
  return routes;
}



function App() {
  return (
    <Router>
      <div style={{display:"flex"}}>
        <Sidebar tree={menuTree}></Sidebar>
        <main style={{marginLeft:20}}></main>
        <Routes>{renderRoutes(menuTree)}</Routes>
      </div>
    </Router>
  )
    
}

export default App
