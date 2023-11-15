import { fetchData } from "./fetchData";

test("fetchData 返回結果為 { success: true}", (done) => {
  fetchData((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});
