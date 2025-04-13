
import React, { createContext, useContext, useState } from 'react';
import { Stack } from '../stack/Stack';

const BooksContext = createContext(null);

export const BooksProvider = ({ children }) => {
  // Creamos una pila inicial y agregamos algunos libros “mock” (opcional)
  const initialStack = new Stack();
  initialStack.push({
    name: 'El Principito',
    isbn: '123-456',
    author: 'Antoine de Saint-Exupéry',
    editorial: 'Reynal & Hitchcock',
  });
  initialStack.push({
    name: 'Cien Años de Soledad',
    isbn: '789-101',
    author: 'Gabriel García Márquez',
    editorial: 'Sudamericana',
  });

  // Estado que guarda "la pila" como tal
  const [stack, setStack] = useState(initialStack);

  // Agregar un libro: creamos una nueva instancia y copiamos los items
  const pushBook = (book) => {
    const newStack = new Stack();
    newStack.items = [...stack.items];
    newStack.push(book);
    setStack(newStack);
  };

  // Sacar el último libro ingresado
  const popBook = () => {
    if (!stack.isEmpty()) {
      const newStack = new Stack();
      newStack.items = [...stack.items];
      const poppedItem = newStack.pop();
      setStack(newStack);
      return poppedItem;
    }
    return null;
  };

  // Obtener el libro en el tope sin quitarlo
  const peekBook = () => {
    return stack.peek();
  };

  // Verificar si está vacío
  const isEmpty = () => {
    return stack.isEmpty();
  };

  // Ver cuántos libros hay
  const size = () => {
    return stack.size();
  };

  // Imprimir la pila en la consola
  const printStack = () => {
    stack.print();
  };

  return (
    <BooksContext.Provider
      value={{
        books: stack.items,  // El array de libros actual
        pushBook,
        popBook,
        peekBook,
        isEmpty,
        size,
        printStack,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
};
