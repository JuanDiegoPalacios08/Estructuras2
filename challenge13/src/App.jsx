// src/App.jsx
import { useState, useEffect } from 'react'
import { db } from './firebase'
import {
  ref,
  push,
  onValue,
  serverTimestamp
} from 'firebase/database'

function App() {
  const [mensaje, setMensaje] = useState('')
  const [conversacion, setConversacion] = useState([])

  // 1) Escuchar nuevos mensajes en tiempo real
  useEffect(() => {
    const mensajesRef = ref(db, 'chat/')
    return onValue(mensajesRef, snapshot => {
      const datos = snapshot.val() || {}
      // convertimos objeto en array ordenado por timestamp
      const lista = Object.entries(datos)
        .map(([key, { texto, creado }]) => ({ key, texto, creado }))
        .sort((a, b) => a.creado - b.creado)
      setConversacion(lista)
    })
  }, [])

  // 2) Enviar un mensaje
  const enviarMensaje = async e => {
    e.preventDefault()
    if (!mensaje.trim()) return
    const mensajesRef = ref(db, 'chat/')
    await push(mensajesRef, {
      texto: mensaje.trim(),
      creado: serverTimestamp()
    })
    setMensaje('')
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>Chat en Tiempo Real</h1>

      <div
        style={{
          border: '1px solid #ccc',
          padding: 10,
          height: 300,
          overflowY: 'scroll',
          marginBottom: 10
        }}
      >
        {conversacion.map(msg => (
          <div key={msg.key} style={{ margin: '5px 0' }}>
            <span>{new Date(msg.creado).toLocaleTimeString()}:</span>{' '}
            <strong>{msg.texto}</strong>
          </div>
        ))}
      </div>

      <form onSubmit={enviarMensaje} style={{ display: 'flex' }}>
        <input
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje..."
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: '0 16px' }}>
          Enviar
        </button>
      </form>
    </div>
  )
}

export default App
