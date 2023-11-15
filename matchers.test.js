// String
test("toMatch 匹配器", () => {
  const str = "http://www.dell-lee.com";
  expect(str).toMatch(/dell/);
});

// Array Set
test("toContain 匹配器", () => {
  const arr = ["dell", "lee", "imooc"];
  const people = new Set(arr);
  expect(people).toContain("dell");
});

// Exception
const throwNewErrorFunc = () => {
  throw new Error("this is a new error");
}
test("throwNewErrorFunc should throw an error", () => {
  expect(throwNewErrorFunc).toThrow("this is a new error");
});
