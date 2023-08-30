// function Countdown(number) {
//   console.log(number);
//   let orther = number - 1;
//   if (orther > 0) {
//     Countdown(orther);
//   }
// }
// Countdown(3);
// Maximum call stack size exceeded

const complexArray = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [999]],
    [1, 2],
  ],
];
// cách 1:
// console.log(complexArray.flat(Infinity));

function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, value) =>
            a.concat(Array.isArray(value) ? flatArray(value, deep - 1) : value),
          []
        )
      : arr.slice();
  return result;
}

console.log(flatArray(complexArray, Infinity));
