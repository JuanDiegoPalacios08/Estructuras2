import React from "react"
import { QueueProvider } from "./context/QueueContext"
import PersonForm from "./components/PersonFom"
import QueueList from "./components/QueueList"

function App() {
  return(
    <QueueProvider>
      <div>
        <h1>Gestor de Cola</h1>
        <PersonForm/>
        <QueueList/>
      </div>
    </QueueProvider>
  )
}

export default App
