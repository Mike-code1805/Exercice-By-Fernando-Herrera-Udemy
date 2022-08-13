import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "decreaseBy"; payload: { value: number } }
  | { type: "multiplyBy"; payload: { value: number } }
  | { type: "divideBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case "reset":
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      };

    case "increaseBy":
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter,
      };

    case "decreaseBy":
      return {
        changes: changes + 1,
        counter: counter - action.payload.value,
        previous: counter,
      };

    case "multiplyBy":
      return {
        changes: changes + 1,
        counter: counter * action.payload.value,
        previous: counter,
      };

    case "divideBy":
      return {
        changes: changes + 1,
        counter: counter / action.payload.value,
        previous: counter,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  const handleDecreaseBy = (value: number) => {
    dispatch({ type: "decreaseBy", payload: { value } });
  };

  const handleMultiplyBy = (value: number) => {
    dispatch({ type: "multiplyBy", payload: { value } });
  };

  const handleDivideBy = (value: number) => {
    dispatch({ type: "divideBy", payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
      <button onClick={() => handleDecreaseBy(1)}>-1</button>
      <button onClick={() => handleMultiplyBy(5)}>*5</button>
      <button onClick={() => handleDivideBy(10)}>÷10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
