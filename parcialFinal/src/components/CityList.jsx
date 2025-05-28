import React, { useState } from 'react';
import { useGraph } from '../context/GraphContext';
import CityItem from './CityItem';
import styles from './CityList.module.scss';

export default function CityList() {
  const { cities, addCity } = useGraph();
  const [newCity, setNewCity] = useState('');

  const handleAdd = () => {
    const name = newCity.trim();
    if (!name) return;
    addCity(name);
    setNewCity('');
  };

  return (
    <div className={styles.cityList}>
      <div className={styles.form}>
        <input
          value={newCity}
          onChange={e => setNewCity(e.target.value)}
          placeholder="Nombre de la ciudad"
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>
      <ul className={styles.list}>
        {cities.map(city => (
          <CityItem key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
}
