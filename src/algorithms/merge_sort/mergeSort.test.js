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
});
