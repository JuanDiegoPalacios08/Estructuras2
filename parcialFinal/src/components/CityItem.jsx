import React, { useState } from 'react';
import { useGraph } from '../context/GraphContext';
import ZoneTree from './ZoneTree';
import { maxHeight, countZones } from '../utils/treeHelpers';
import styles from './CityItem.module.scss';

export default function CityItem({ city }) {
  const { deleteCity, addZone, editZone } = useGraph();
  const [zoneName, setZoneName] = useState('');

  const handleAddZone = () => {
    const name = zoneName.trim();
    if (!name) return;
    addZone(city.id, null, name);
    setZoneName('');
  };

  return (
    <li className={styles.cityItem}>
      <div className={styles.header}>
        <h3>{city.name}</h3>
        <button onClick={() => deleteCity(city.id)}>Eliminar</button>
      </div>

      <div className={styles.addZone}>
        <input
          value={zoneName}
          onChange={e => setZoneName(e.target.value)}
          placeholder="Nueva zona verde"
        />
        <button onClick={handleAddZone}>+Zona</button>
      </div>

      <ZoneTree
        zones={city.zones}
        onAdd={(parentId, name) => addZone(city.id, parentId, name)}
        onEdit={(zoneId, newName) => editZone(city.id, zoneId, newName)}
      />

      <div className={styles.stats}>
        Altura máxima: <strong>{maxHeight(city.zones)}</strong> |
        Total de zonas: <strong>{countZones(city.zones)}</strong>
      </div>
    </li>
  );
}
