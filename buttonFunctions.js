export const addOne = () => {
  !started ? setStarted(true) : "";
  setCount(count + 1);
};

export const minusOne = () => {
  !started ? setStarted(true) : "";
  setCount(count - 1);
};

export const square = () => {
  !started ? setStarted(true) : "";
  setCount(count * count);
};

export const divideByPi = () => {
  !started ? setStarted(true) : "";
  setCount(count / Math.PI);
};

export const round = () => {
  !started ? setStarted(true) : "";

  setCount(Math.round(count));
};

export const nothing = () => {
  !started ? setStarted(true) : "";
  return;
};

export const reset = () => {
  setCount(0);
  setStarted(false);
};
