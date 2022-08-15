export type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "decreaseBy"; payload: { value: number } }
  | { type: "multiplyBy"; payload: { value: number } }
  | { type: "divideBy"; payload: { value: number } }
  | { type: "reset" };

export const doReset = (): CounterAction => ({ type: "reset" });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: "increaseBy",
  payload: { value: value },
});

export const doDecreaseBy = (value: number): CounterAction => ({
  type: "decreaseBy",
  payload: { value: value },
});

export const doMultiplyBy = (value: number): CounterAction => ({
  type: "multiplyBy",
  payload: { value: value },
});

export const doDivideBy = (value: number): CounterAction => ({
  type: "divideBy",
  payload: { value: value },
});