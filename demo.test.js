import { runCallback, createObject, getData } from "./demo";
import axios from "axios";
jest.mock("axios");

test.only("测试 runCallback", () => {
  const func = jest.fn();
  // func.mockReturnValue('jojo')
  // func.mockImplementationOnce(() => {
  //   console.log("mock callback");
  //   return "jojo";
  // });
  // func.mockImplementationOnce(() => {
  //   console.log("mock callback");
  //   return "jojo";
  // });
  // func.mockImplementationOnce(() => {
  //   return this;
  // });
  func.mockReturnThis();

  runCallback(func);
  runCallback(func);
  runCallback(func);
  // expect(func.mock.calls.length).toBe(3)
  // expect(func.mock.calls[0]).toEqual(["abc"]);
  expect(func).toBeCalledWith("abc");
  // expect(func.mock.results[0].value).toBe("jojo");
  // expect(func.mock.results[1].value).toBe("jojo2");
  expect(func.mock.results[0].value).toBeUndefined();
  // console.log(func.mock)
});

test("测试 createObject", () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock);
});

test("测试 getData", async () => {
  axios.get.mockResolvedValue({ data: "hello" });
  await getData().then((data) => {
    expect(data).toBe("hello");
  });
});
