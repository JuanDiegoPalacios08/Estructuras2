
import { GraphProvider } from './context/GraphContext';
import CityList from './components/CityList';
import GraphView from './components/GraphView';
import ConnectionForm  from './components/ConnectionForm';

export default function App() {
  return (
    <GraphProvider>
      <div style={{ padding: 16 }}>
        <h1 style={{ marginBottom: 16 }}>Red de Ciudades</h1>
        <CityList />
        <ConnectionForm/>
        <GraphView/>
      </div>
    </GraphProvider>
  );
}
