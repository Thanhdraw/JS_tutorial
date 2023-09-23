// insertionn-sort
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let num = arr[i];
      let next = arr[j];
      if (num > next) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(insertionSort([1, 4, 5, 6, 6, 1, 2, 7]));
