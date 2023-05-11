// Sequential algorithm that compares array items to target until target is found.
function linearSearch(array, target) {
  let result = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result = i;
      break;
    }
  }

  return result;
}

module.exports = linearSearch;
