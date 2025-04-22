import React, { useState, useEffect } from 'react';
import { database } from "./firebase/config";

function ListaDatos() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const ref = database.ref('datos');
    
    // Escucha los cambios en la base de datos
    ref.on('value', snapshot => {
      const data = snapshot.val();
      // Convertimos el objeto recibido en un array
      const lista = data ? Object.values(data) : [];
      setDatos(lista);
    });

    // Limpieza del listener cuando el componente se desmonta
    return () => ref.off();
  }, []);

  return (
    <div>
      <h2>Datos en Tiempo Real</h2>
      <ul>
        {datos.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDatos;
