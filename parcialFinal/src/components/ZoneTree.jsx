import React, { useState } from 'react';
import styles from './ZoneTree.module.scss';

export default function ZoneTree({ zones, onAdd, onEdit }) {
  return (
    <ul className={styles.zoneTree}>
      {zones.map(z => (
        <ZoneNode key={z.id} zone={z} onAdd={onAdd} onEdit={onEdit} />
      ))}
    </ul>
  );
}

function ZoneNode({ zone, onAdd, onEdit }) {
  const [showAdd, setShowAdd]   = useState(false);
  const [newName, setNewName]   = useState('');
  const [editing, setEditing]   = useState(false);
  const [editName, setEditName] = useState(zone.name);

  const saveEdit = () => {
    if (!editName.trim()) return;
    onEdit(zone.id, editName.trim());
    setEditing(false);
  };

  const saveNewZone = () => {
    if (!newName.trim()) return;
    onAdd(zone.id, newName.trim());
    setNewName('');
    setShowAdd(false);
  };

  return (
    <>
      <li className={styles.node}>
        {editing
          ? <input
              value={editName}
              onChange={e => setEditName(e.target.value)}
            />
          : <span>{zone.name}</span>
        }

        <div className={styles.actions}>
          {editing
            ? <button onClick={saveEdit}>Guardar</button>
            : <button onClick={() => { setEditing(true); setEditName(zone.name); }}>
                Editar
              </button>
          }
          <button onClick={() => setShowAdd(v => !v)}>+Subzona</button>
        </div>
      </li>

      {showAdd && (
        <div className={styles.addForm}>
          <input
            value={newName}
            onChange={e => setNewName(e.target.value)}
            placeholder="Nombre subzona"
          />
          <button onClick={saveNewZone}>Agregar</button>
        </div>
      )}

      {zone.children.length > 0 && (
        <ul className={styles.zoneTree}>
          {zone.children.map(c => (
            <ZoneNode key={c.id} zone={c} onAdd={onAdd} onEdit={onEdit} />
          ))}
        </ul>
      )}
    </>
  );
}
