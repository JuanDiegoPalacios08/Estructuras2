import React from "react";
import { createContext,useState } from "react";
import LinkedList from "../listas/LinkedList";

export const LinkedListContext = createContext()

export const LinkedListProvider = ({children})=>{
    // se crea una instancia de linkedlist que se mantiene
    const [list]= useState(() => {
        const newList = new LinkedList()
        // Agregamos canciones de ejempli
        newList.add('Song 1 - Imaginate')
        newList.add('Song 2 - que mas pues')
        newList.add('Song 3 - diomedazo')
        newList.add('Song 4 - vicentazo')
        return newList
    })

    //estado para almacenar la cancion actual
    const [currentSong, setCurrentSong] = useState(list.getCurrentValue())

    //Funcion para avanzar a la siguiente cancion
    const nextSong = () => {
        const next = list.next()
        if (next) {
          setCurrentSong(next)
        } else {
          alert('No hay más canciones en la lista')
        }
      }

    return(
        <div>
            <LinkedListContext.Provider value={{currentSong, nextSong}}>
            {children}
            </LinkedListContext.Provider>

        </div>
    )
}