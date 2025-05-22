import React, { useState } from 'react';
import styles from './Counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep]   = useState(1);

  return (
    <>
      <div className={styles.counterDisplay}>
        Counter: {count}
      </div>
      <div className={styles.controls}>
        <input
          type="number"
          value={step}
          onChange={e => setStep(parseInt(e.target.value) || 0)}
        />
        <button onClick={() => setCount(c => c + step)}>
          +{step}
        </button>
        <button onClick={() => setCount(c => c - step)}>
          -{step}
        </button>
        <button
          className={styles.reset}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}
