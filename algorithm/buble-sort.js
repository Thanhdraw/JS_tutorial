let newArray = [];
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      let num = array[j];
      let next = array[j + 1];
      if (num > next) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 5, 6, 4, 43, 23, 123, 0, 2, 92, 55, 63, 999, 888]));
