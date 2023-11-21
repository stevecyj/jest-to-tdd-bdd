import timer from "./timer";
beforeEach(() => {
  jest.useFakeTimers();
});

test("timer", () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
});

test("timer2", () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
});
