let { quote } = require("../src/quotes");
test("Simple Test", () => {
  let str = quote();
  expect(str.length).toBe(11);
});
