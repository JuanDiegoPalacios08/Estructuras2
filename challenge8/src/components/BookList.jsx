
import React from 'react';
import { useBooks } from '../context/BooksContext';

function BookList() {
  const { books, popBook } = useBooks();

  return (
    <div>
      <h2>Lista de Libros (Stack)</h2>
      {books.length === 0 ? (
        <p>No hay libros en la pila.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.name}</strong> <br />
              ISBN: {book.isbn} <br />
              Autor: {book.author} <br />
              Editorial: {book.editorial}
              <hr />
            </li>
          ))}
        </ul>
      )}

      {/* Botón opcional para demostrar pop() */}
      {/* <button onClick={handlePop}>Pop (Eliminar último libro)</button> */}
    </div>
  );
}

export default BookList;
