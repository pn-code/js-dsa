// An efficient algorithm for finded an item from a sorted list of items
function binarySearch(array, target) {
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (array[mid] == target) {
      return mid;
    } else if (array[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  
  return null;
}

module.exports = binarySearch;
