const readCSV = require("../../src/csvReader");

test("Read CSV File", async () => {
  const data = await readCSV("./employees.csv");
  expect(data.length).toBeGreaterThan(0);
  expect(data[0].name).toBe("John");
  expect(data[0].age).toBe("30");
});
