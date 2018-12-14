const first = require("./first");

test("check for 2+2 is equal to 4", () => {
  expect(first.add(2, 2)).toBe(4);
});
test("check for 2+2 is Not to equal 5", () => {
  expect(first.add(2, 2)).not.toBe(5);
});
test("check null", () => {
  expect(first.isNull()).toBeNull();
});
test("Should be Falsy", () => {
  expect(first.checkvalue(null)).toBeFalsy(); //undefined, 0 will also return falsy
});

//toEqual
test("Result should equal to Sharad Pawar object", () => {
  expect(first.createUser()).toEqual({
    firstName: "Sharad",
    lastName: "Pawar"
  });
});

//toBeLessThan, toBeGreaterThan, toBeLessThanOrEqual
test("Value should be less than or Equal 1500", () => {
  const load1 = 600;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1500);
});

test("Value should be less than 1500", () => {
  const load1 = 500;
  const load2 = 800;
  expect(load1 + load2).toBeLessThan(1500);
});

test("Value should be greater than 1500", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeGreaterThan(1500);
});

//Regex
test("There should be no I in team", () => {
  expect("team").not.toMatch(/I/);
});

//Arrays
test("Admin must exist in given array ", () => {
  usernames = ["Admin", "local", "master"];
  expect(usernames).toContain("Admin");
});

//Async calls
//Promise
// test("Fetched user should be Leanne Graham", () => {
//   expect.assertions(1);
//   return first.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//Asyn Await
test("Fetched user should be Leanne Graham using async and await", async () => {
  expect.assertions(1);
  const data = await first.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
