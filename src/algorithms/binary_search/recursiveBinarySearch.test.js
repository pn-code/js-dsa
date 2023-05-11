const recursiveBinarySearch = require("./recursiveBinarySearch");

describe("Linear Search", () => {
  it("should return null if target does not exist", () => {
    const arr = [1, 2, 3, 4];
    const result = recursiveBinarySearch(arr, 10);

    expect(result).toBeNull();
  });

  it("should be able to find the first element", () => {
    const arr = [1, 2, 3, 4];
    const result = recursiveBinarySearch(arr, 1);

    expect(result).toBe(0);
  });

  it("should be able to find the last element", () => {
    const arr = [1, 2, 3, 4];
    const result = recursiveBinarySearch(arr, 4);

    expect(result).toBe(3);
  });

  it("should be able to find a middle element", () => {
    const arr = [1, 2, 3, 4];
    const result = recursiveBinarySearch(arr, 2);

    expect(result).toBe(1);
  });
});
