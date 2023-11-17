import { fetchData, fetchData404 } from "./fetchData";

// test("fetchData 返回結果為 { success: true}", (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({ success: true });
//     done();
//   });
// });

// test("fetchData 返回結果為 { success: true}", () => {
//   return fetchData().then((response) => {
//     expect(response.data).toEqual({ success: true });
//   });
// });

// test("fetchData 返回結果為 404", () => {
//   expect.assertions(1);
//   return fetchData404().catch((e) => {
//     console.log(e.toString())
//     expect(e.toString().indexOf("404") > -1).toBe(true);
//   });
// });

// test("fetchData 返回結果為 { success: true }", () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true,
//     },
//   });
// });

// test("fetchData 返回結果為 404", () => {
//   return expect(fetchData404()).rejects.toThrow();
// });

// test("fetchData 返回結果為 { success: true }", async() => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true,
//     },
//   });
// });

// test("fetchData 返回結果為 404", async() => {
//   await expect(fetchData404()).rejects.toThrow();
// });

test("fetchData 返回結果為 { success: true }", async() => {
  const response= await fetchData();
  expect(response.data).toEqual({
    success: true,
  });
});

test("fetchData 返回結果為 404", async() => {
  expect.assertions(1);
  try {
    await fetchData404();
  } catch (e) {
    expect(e.toString()).toEqual("AxiosError: Request failed with status code 404");
  }
});
