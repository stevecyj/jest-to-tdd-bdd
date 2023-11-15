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

test("not 匹配器", () => {
  const a = 1;
  expect(a).not.toBeFalsy();
});
