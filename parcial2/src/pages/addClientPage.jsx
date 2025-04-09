import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addClient } from '../store/slices/clientsSlices'

const AddClientPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') return;
    dispatch(addClient({ name }));
    setName('');
  };

  return (
    <div>
      <h1>Agregar Cliente</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Nombre del Cliente"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AddClientPage;
