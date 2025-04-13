import React from "react";
import { useContext } from "react";
import { LinkedListContext } from "../../context/LinkedListContext";

function LinkedListPage(){
    const {currentSong, NextSong} = useContext(LinkedListContext)

    return(
        <div>
            <h1>Lista Enlazada - Reproductor de Canciones</h1>
            <p>
                Cancion actual: {currentSong}
            </p>
            <button onClick={NextSong}>Siguiente Cancion</button>
        </div>
    )
}

export default LinkedListPage