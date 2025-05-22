import GraphVisualizer from "./components/GraphVisualizer";
import CityPeopleList from "./components/CityPeopleList";
import './App.css'
function App() {
  return (
    <div className="container">
      <h1>Grafo de Personas y Ciudades</h1>
      <div className="graph-wrapper">
        <GraphVisualizer />
      </div>
      <div className="city-list">
        <CityPeopleList />
      </div>
    </div>
  );
}


export default App;
