// Binary search done recursively
function recursiveBinarySearch(array, target) {
  if (array.length === 0) {
    return null;
  } else {
    const midpoint = Math.floor(array.length / 2);

    if (array[midpoint] === target) {
      return midpoint;
    } else if (array[midpoint] < target) {
        const result = recursiveBinarySearch(array.slice(midpoint + 1), target);
        return result === null ? null : result + midpoint + 1;
    } else {
      return recursiveBinarySearch(array.slice(0, midpoint), target);
    }
  }
}

module.exports = recursiveBinarySearch;
