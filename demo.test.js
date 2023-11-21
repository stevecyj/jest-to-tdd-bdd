jest.mock("./demo");
import { fetchData } from "./demo";
const { getNumber } = jest.requireActual("./demo");

test("fetchData 測試", () => {
  return fetchData().then((data) => {
    expect(data).toEqual({
      success: true,
    });
  });
});

test("getNumber 測試", () => {
  expect(getNumber()).toEqual(123);
});
