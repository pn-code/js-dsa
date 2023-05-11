const linearSearch = require("./linearSearch");

describe("Linear Search", () => {
  it("should return null if target does not exist", () => {
    const arr = [1, 2, 3, 4];
    const result = linearSearch(arr, 10);

    expect(result).toBeNull();
  });

  it("should be able to find the first element", () => {
    const arr = [1, 2, 3, 4];
    const result = linearSearch(arr, 1);

    expect(result).toBe(0);
  });

  it("should be able to find the last element", () => {
    const arr = [1, 2, 3, 4];
    const result = linearSearch(arr, 4);

    expect(result).toBe(3);
  });

  it("should be able to find a middle element", () => {
    const arr = [1, 2, 3, 4];
    const result = linearSearch(arr, 2);

    expect(result).toBe(1);
  });
});
