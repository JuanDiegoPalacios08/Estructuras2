import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AddClientPage from './pages/addClientPage'
import ClientsPage from './pages/ClientsPage'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Agregar Cliente</Link> | <Link to="/clientes">Clientes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AddClientPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
      </Routes>
    </div>
  );
}

export default App;
