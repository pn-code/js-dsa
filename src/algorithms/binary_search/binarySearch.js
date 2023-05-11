// An efficient algorithm for finded an item from a sorted list of items
function binarySearch(array, target) {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2);

    if (array[midpoint] === target) {
      return midpoint;
    } else if (array[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return null;
}

module.exports = binarySearch;
