// Sort procedure that sorts a list in ascending order...
function mergeSort(array) {
  // Find the midpoint of the list and divide into subarrays
  const midpoint = Math.floor((array.length) / 2);

  const leftHalf = array.slice(0, midpoint);
  const rightHalf = array.slice(midpoint);

  if (array.length <= 1) return array;

  // Recursively sort the subarrays created in the previous steps
  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);

  // Merge the sorted subarrays created in the previous steps
  let sortedArray = [];
  let i = 0;
  let j = 0;

  // If array.length is even
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i += 1;
    } else {
      sortedArray.push(right[j]);
      j += 1;
    }
  }

  // In case array.length is odd
  while (i < left.length) {
    sortedArray.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j += 1;
  }

  return sortedArray;
}

module.exports = mergeSort;