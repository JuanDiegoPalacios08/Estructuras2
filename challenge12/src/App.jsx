// src/App.js
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

  // Referencia a la colección en Firestore
  const usersCollection = collection(db, "users");

  // Cargar datos desde Firestore
  const getUsers = async () => {
    const querySnapshot = await getDocs(usersCollection);
    setUsers(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  // Crear usuario
  const createUser = async () => {
    if (!name || !age) return;
    await addDoc(usersCollection, { name, age });
    setName("");
    setAge("");
    getUsers();
  };

  // Eliminar usuario
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  // Editar usuario
  const editUser = async () => {
    if (!name || !age) return;
    const userDoc = doc(db, "users", editId);
    await updateDoc(userDoc, { name, age });
    setName("");
    setAge("");
    setEditId(null);
    getUsers();
  };

  // Cargar usuarios al inicio
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>CRUD Firebase - React & Vite</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Edad"
        />
        <button onClick={editId ? editUser : createUser}>
          {editId ? "Editar Usuario" : "Agregar Usuario"}
        </button>
      </div>
      <div>
        <h2>Usuarios</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} años
              <button onClick={() => { setName(user.name); setAge(user.age); setEditId(user.id); }}>
                Editar
              </button>
              <button onClick={() => deleteUser(user.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
