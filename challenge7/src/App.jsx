import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import LinkedListPage from './assets/pages/LinkedListPage'
import DoublyLinkedListPage from './assets/pages/DoublyLinkedListPage'
import { LinkedListProvider } from './context/LinkedListContext'
import { DoublyLinkedListProvider } from './context/DoublyLinkedListContext'

function App() {
  return(
    <div>
      <nav>
        <Link to="/linked">Lista Enlazada</Link>
        <Link to="/doubly">Liste Doblemente Enlazada</Link>
      </nav>

      <Routes>
        <Route path='/linked' 
        element={
        <LinkedListProvider>
        <LinkedListPage/>
        </LinkedListProvider>}/>
        <Route path='/doubly' 
        element={
        <DoublyLinkedListProvider>
          <DoublyLinkedListPage/>
        </DoublyLinkedListProvider>}/>
      </Routes>
    </div>
  )
}

export default App
