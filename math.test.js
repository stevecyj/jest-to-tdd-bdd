const math = require("./math.js");
const { add, minus, multi } = math;

// function expect(result) {
//   return {
//     toBe: function (actual) {
//       if (result !== actual) {
//         throw Error(`预期值和实际值不相等，预期${actual}, 结果却是${result}`);
//       }
//     },
//   };
// }

// function test(desc, fn) {
//   try {
//     fn();
//     console.log(`${desc} 通过测试`);
//   } catch (e) {
//     console.log(`${desc} 没有通过测试 ${e}`);
//   }
// }

test("测试加法3+7", () => {
  expect(add(3, 7)).toBe(10);
});

test("测试减法3-3", () => {
  expect(minus(3, 3)).toBe(0);
});

test("測試乘法 3*3", () => {
  expect(multi(3, 3)).toBe(9);
});

// expect(add(3, 7)).toBe(10);
// expect(minus(3, 3)).toBe(0);
