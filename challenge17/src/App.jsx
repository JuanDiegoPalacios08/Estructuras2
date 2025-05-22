import React from 'react';
import Counter from './Counter';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.card}>
        <header className={styles.cardHeader}>
          <h1>Mi Contador Dinámico</h1>
          <p>Incrementa o decrementa a tu ritmo</p>
        </header>
        <Counter />
      </div>
    </div>
  );
}
