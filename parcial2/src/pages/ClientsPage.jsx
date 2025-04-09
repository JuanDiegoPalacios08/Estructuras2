import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addConsulta, addReclamo, popConsulta, dequeueReclamo } from '../store/slices/clientsSlices'

const ClientsPage = () => {
  
  const clients = useSelector(state => state.clients.clients);
  const dispatch = useDispatch();
  
  
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [consultaInput, setConsultaInput] = useState('');
  const [reclamoInput, setReclamoInput] = useState('');

  const selectedClient = clients.find(c => c.id === selectedClientId);

  const handleSelectClient = (id) => {
    setSelectedClientId(id);
  };

  const handleAddConsulta = () => {
    if(consultaInput.trim() === '') return;
    dispatch(addConsulta({ clientId: selectedClientId, consulta: consultaInput }));
    setConsultaInput('');
  };

  const handleAddReclamo = () => {
    if(reclamoInput.trim() === '') return;
    dispatch(addReclamo({ clientId: selectedClientId, reclamo: reclamoInput }));
    setReclamoInput('');
  };

  const handlePopConsulta = () => {
    dispatch(popConsulta({ clientId: selectedClientId }));
  };

  const handleDequeueReclamo = () => {
    dispatch(dequeueReclamo({ clientId: selectedClientId }));
  };

  return (
    <div>
      <h1>Clientes</h1>
      <div >
        <div>
          <h2>Lista de Clientes</h2>
          <ul>
            {clients.map(client => (
              <li key={client.id}>
                <button onClick={() => handleSelectClient(client.id)}>
                  {client.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {selectedClient && (
          <div>
            <h2>Detalles de Cliente: {selectedClient.name}</h2>
            <div >
              <h3>Consultas</h3>
              <ul>
                {selectedClient.consultas.slice().reverse().map((consulta, index) => (
                  <li key={index}>{consulta}</li>
                ))}
              </ul>
              <input 
                type="text"
                placeholder="Nueva Consulta"
                value={consultaInput}
                onChange={e => setConsultaInput(e.target.value)}
              />
              <button onClick={handleAddConsulta}>Agregar Consulta</button>
              <button onClick={handlePopConsulta} >
                Atender Consulta
              </button>
            </div>
            <div>
              <h3>Reclamos</h3>
              <ul>
                {selectedClient.reclamos.map((reclamo, index) => (
                  <li key={index}>{reclamo}</li>
                ))}
              </ul>
              <input 
                type="text"
                placeholder="Nuevo Reclamo"
                value={reclamoInput}
                onChange={e => setReclamoInput(e.target.value)}
              />
              <button onClick={handleAddReclamo}>Agregar Reclamo</button>
              <button onClick={handleDequeueReclamo} style={{ marginLeft: '0.5rem' }}>
                Atender Reclamo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientsPage;
