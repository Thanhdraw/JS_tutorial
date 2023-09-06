function task(message) {
  let number = 10000000;
  while (number > 0) {
    number--;
  }
  console.log(message);
}

// console.log("Start");
// task("loading");
// console.log("End");

// Call-back
console.log("Start");
setTimeout(() => {
  task("loading");
}, 2000);
// Rời khỏi callstack qua web API

console.log("End");

// Web APIs: setTimeout, fetch request, DOM event