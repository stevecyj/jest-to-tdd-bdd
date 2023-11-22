import addDivToBody from "./demo";
import $ from "jquery";

test("addDivToBody", () => {
  addDivToBody();
  addDivToBody();
  console.log($("body").find("div").length);
  expect($("body").find("div").length).toBe(2);
});
