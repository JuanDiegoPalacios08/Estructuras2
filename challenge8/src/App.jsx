
import React from 'react';
import { BooksProvider } from './context/BooksContext';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <BooksProvider>
      <div style={{ margin: '20px' }}>
        <h1>Stack de Libros</h1>
        <BookList />
        <BookForm />
      </div>
    </BooksProvider>
  );
}

export default App;
