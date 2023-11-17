import Counter from "./Counter";

let counter = null;
beforeEach(() => {
  console.log("BeforeAll");
  counter = new Counter();
});

afterAll(() => {
  console.log("AfterAll");
});

describe("測試增加相關",() => {
  test("測試 Counter 的 addOne 方法", () => {
    console.log("測試 Counter 的 addOne 方法");
    counter.addOne();
    expect(counter.count).toBe(1);
  });

  test("測試 Counter 的 addTwo 方法", () => {
    console.log("測試 Counter 的 addTwo 方法");
    counter.addTwo();
    expect(counter.count).toBe(2);
  });
})

describe("測試減少相關",() => {
  test("測試 Counter 的 minusOne 方法", () => {
    console.log("測試 Counter 的 minusOne 方法");
    counter.minusOne();
    expect(counter.count).toBe(-1);
  });

  test("測試 Counter 的 minusTwo 方法", () => {
    console.log("測試 Counter 的 minusTwo 方法");
    counter.minusTwo();
    expect(counter.count).toBe(-2);
  });
})