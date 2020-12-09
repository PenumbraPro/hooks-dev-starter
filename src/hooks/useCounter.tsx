import { useState, useCallback } from 'react';

type Reducer = () => void;

type Count = (
  init?: number
) => {
  count: number;
  increment: Reducer;
  decrement: Reducer;
};

const useCounter: Count = (init?: number) => {
  const [count, setCount] = useState(init ?? 0);

  const increment = () => setCount((x) => x + 1);
  const decrement = () => setCount((x) => x - 1);

  return { count, increment, decrement };
};
export default useCounter;
