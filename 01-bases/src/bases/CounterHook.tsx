import { useCounter } from "../hook/useCounter";

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 10,
  });

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClick}>+5</button>
    </>
  );
};
