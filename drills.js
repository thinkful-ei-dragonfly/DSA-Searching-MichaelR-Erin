function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

// 1. How many searches?
// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 3, 5, 6, 8
// 6, 8
// 8

// it would take 3 recursive calls to find 8.

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 12, 14, 15, 17, 18
// 17, 18
// 18
// return -1

// 16 is not in the array, returns -1

