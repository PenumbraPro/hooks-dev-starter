import React from 'react';

import useCounter from './hooks/useCounter';

const App = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </>
  );
};

export default App;
