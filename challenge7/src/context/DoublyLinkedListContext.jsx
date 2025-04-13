
import React, { createContext, useState } from 'react'
import DoublyLinkedList from '../listas/DoublyLinkedList'

export const DoublyLinkedListContext = createContext()

export const DoublyLinkedListProvider = ({ children }) => {
  const [list] = useState(() => {
    const newList = new DoublyLinkedList()
    // Agregamos páginas de ejemplo
    newList.add('Página 1: Inicio')
    newList.add('Página 2: Contacto')
    newList.add('Página 3: Servicios')
    newList.add('Página 4: Blog')
    return newList
  })

  const [currentPage, setCurrentPage] = useState(list.getCurrentValue())

  // Función para avanzar a la página siguiente
  const goForward = () => {
    const next = list.goForward()
    if (next) {
      setCurrentPage(next)
    } else {
      alert('No hay página siguiente')
    }
  }

  // Función para retroceder a la página anterior
  const goBack = () => {
    const prev = list.goBack()
    if (prev) {
      setCurrentPage(prev)
    } else {
      alert('No hay página anterior')
    }
  }

  const resetToHead = () => {
    const first = list.resetToHead()
    setCurrentPage(first)
  }

  const resetToTail = () => {
    const last = list.resetToTail()
    setCurrentPage(last)
  }

  return (
    <DoublyLinkedListContext.Provider
      value={{ currentPage, goForward, goBack, resetToHead, resetToTail }}
    >
      {children}
    </DoublyLinkedListContext.Provider>
  )
}
