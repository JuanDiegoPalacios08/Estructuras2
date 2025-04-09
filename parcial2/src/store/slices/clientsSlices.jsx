import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // La lista de clientes y un contador para asignar IDs únicos
  clients: [],
  nextId: 1,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    
    addClient: (state, action) => {
      const client = {
        id: state.nextId,
        name: action.payload.name,
        consultas: [], // Se manejará como una pila 
        reclamos: [],  // Se manejará como una cola 
      };
      state.clients.push(client);
      state.nextId += 1;
    },
    
    addConsulta: (state, action) => {
      const client = state.clients.find(c => c.id === action.payload.clientId);
      if (client) {
        client.consultas.push(action.payload.consulta);
      }
    },
    
    addReclamo: (state, action) => {
      const client = state.clients.find(c => c.id === action.payload.clientId);
      if (client) {
        client.reclamos.push(action.payload.reclamo);
      }
    },

    
    popConsulta: (state, action) => {
      const client = state.clients.find(c => c.id === action.payload.clientId);
      if (client && client.consultas.length > 0) {
        client.consultas.pop();
      }
    },
    
    dequeueReclamo: (state, action) => {
      const client = state.clients.find(c => c.id === action.payload.clientId);
      if (client && client.reclamos.length > 0) {
        client.reclamos.shift();
      }
    }
  },
});

export const { addClient, addConsulta, addReclamo, popConsulta, dequeueReclamo } = clientsSlice.actions;
export default clientsSlice.reducer;
