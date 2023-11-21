import { generateConfig, generateAnotherConfig } from "./demo";

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    {
      "domain": "localhost",
      "port": "8080",
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

// test("测试 generateAnotherConfig 函数", () => {
//   expect(generateAnotherConfig()).toMatchSnapshot({
//     time: expect.any(Date)
//   });
// })

test("测试 generateAnotherConfig 函数", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    {
      "domain": "localhost2",
      "port": "8080",
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
