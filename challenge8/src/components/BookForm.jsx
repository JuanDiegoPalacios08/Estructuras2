
import React, { useState } from 'react';
import { useBooks } from '../context/BooksContext';

function BookForm() {
  const { pushBook } = useBooks();

  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [editorial, setEditorial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear objeto libro con los datos del formulario
    const newBook = { name, isbn, author, editorial };
    // Agregar libro a la pila usando push()
    pushBook(newBook);

    // Limpiar los campos
    setName('');
    setIsbn('');
    setAuthor('');
    setEditorial('');
  };

  return (
    <div>
      <h2>Agregar Nuevo Libro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>ISBN:</label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Autor:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Editorial:</label>
          <input
            type="text"
            value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
            required
          />
        </div>

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default BookForm;
