import React from "react";
import { useContext } from "react";
import { DoublyLinkedListContext } from "../../context/DoublyLinkedListContext";

function DoublyLinkedListPage(){
    const { currentPage, goForward,goBack}=useContext(DoublyLinkedListContext)

    return(
        <div>
            <h1>Lista Dobkemente Enlazada-Navegador</h1>
            <p>
                Pagina Actual: {currentPage}
            </p>
            <button onClick={goBack}>Atras</button>
            <button onClick={goForward}>Adelante</button>
        </div>
    )
}

export default DoublyLinkedListPage