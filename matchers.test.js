// test("测试加法3+7", () => {
//   const a = { one: 1 };
//   expect(a).toBe({ one: 1 });
// });

test("測試內容相等", () => {
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});
