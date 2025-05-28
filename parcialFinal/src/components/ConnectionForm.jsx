
import React, { useState } from 'react';
import { useGraph } from '../context/GraphContext';
import styles from './ConnectionForm.module.scss';

export default function ConnectionForm() {
  const { cities, edges, addEdge, deleteEdge } = useGraph();
  const [src, setSrc]     = useState('');
  const [tgt, setTgt]     = useState('');

  const handleConnect = () => {
    if (src && tgt && src !== tgt) {
      addEdge(src, tgt);
      setSrc('');
      setTgt('');
    }
  };

  return (
    <div className={styles.container}>
      <h4>Conectar Ciudades</h4>
      <div className={styles.form}>
        <select value={src} onChange={e => setSrc(e.target.value)}>
          <option value="">-- Origen --</option>
          {cities.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select value={tgt} onChange={e => setTgt(e.target.value)}>
          <option value="">-- Destino --</option>
          {cities.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <button onClick={handleConnect}>Conectar</button>
      </div>

      {edges.length > 0 && (
        <ul className={styles.list}>
          {edges.map(([a, b]) => {
            const nameA = cities.find(c => c.id === a)?.name || a;
            const nameB = cities.find(c => c.id === b)?.name || b;
            return (
              <li key={`${a}-${b}`}>
                {nameA} ↔ {nameB}
                <button onClick={() => deleteEdge(a, b)}>X</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
