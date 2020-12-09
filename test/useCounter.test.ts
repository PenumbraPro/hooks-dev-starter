import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../src/hooks/useCounter';

describe('useCounter Hooks', () => {
  it('should render initialize correctly', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
  });

  it('should render and work correctly', () => {
    const { result } = renderHook(() => useCounter(1));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(1);
  });
});
