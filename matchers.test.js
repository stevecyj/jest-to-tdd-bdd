// test("测试加法3+7", () => {
//   const a = { one: 1 };
//   expect(a).toBe({ one: 1 });
// });

// test("測試內容相等", () => {
//   const a = { one: 1 };
//   expect(a).toEqual({ one: 1 });
// });

// test("toBeUndefined 匹配器", () => {
//   const a = undefined;
//   expect(a).toBeUndefined();
// });

// test("toBeDefined 匹配器", () => {
//   const a = null;
//   expect(a).toBeDefined();
// });

// test("toBeTruthy 匹配器", () => {
//   const a = 0;
//   expect(a).toBeTruthy();
// });

// test("toBeFalsy 匹配器", () => {
//   const a = 1;
//   expect(a).toBeFalsy();
// });

// test("not 匹配器", () => {
//   const a = 1;
//   expect(a).not.toBeFalsy();
// });

// 數字相關
// test("toBeGreaterThan 匹配器", () => {
//   const a = 10;
//   expect(a).toBeGreaterThan(9);
// });

// test("toBeLessThan 匹配器", () => {
//   const a = 10;
//   expect(a).toBeLessThan(11);
// });

// test("toBeGreaterThanOrEqual 匹配器", () => {
//   const a = 10;
//   expect(a).toBeGreaterThanOrEqual(10);
// });

// test("toBeCloseTo 匹配器", () => {
//   const firstNumber = 0.1;
//   const secondNumber = 0.2;
//   expect(firstNumber + secondNumber).toBeCloseTo(0.3);
// });

// String
test("toMatch 匹配器", () => {
  const str = "http://www.dell-lee.com";
  expect(str).toMatch(/dell/);
});
