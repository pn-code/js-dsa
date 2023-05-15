const mergeSort = require("./mergeSort");

describe("MergeSort", () => {
  it("should sort array", () => {
    const array = [1, 3, 2, 5, 4];
    expect(mergeSort(array).toString()).toBe("1,2,3,4,5");
  });

  it("should sort array with negative numbers", () => {
    const array = [-1, 3, 2, -5, 4];
    expect(mergeSort(array).toString()).toBe("-5,-1,2,3,4");
  });

  it("should sort array with negative numbers, zero, and duplicates", () => {
    const array = [-1, 0, 3, 2, -5, 4, 0, 0];
    expect(mergeSort(array).toString()).toBe("-5,-1,0,0,0,2,3,4");
  });
});
