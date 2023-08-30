// 1.sự khác nhau giữa i++ và ++i
// 1.gán giá trị trước, rồi cộng sau
let i = 1;
let j = i++;
//console.log(i, j); //2 1

// 2. tăng giá trị trước, rồi gán sau
let a = 1;
let b = ++a;
//console.log(a, b);

// 3. Lưu ý khi viết function()

function total(x, y) {
  return x + y;

  return; //<- undefined
  x + y;
}

// 3.2 Chuyễn đổi dữ liệu
// Number
const str = "123";
// console.log(parseFloat(str));
// console.log(parseInt(str));
// console.log(Number(str));
//console.log(+str); //<- chuyen doi dữ lieu sang number

// Boolearn

// 4. arguments

function number(a, b, c) {
  console.log(arguments); // <-nó có điểm tương đồng với mảng, nhưng không phải mảng
  //   console.log(typeof arguments);
  //   const args = Array.from(arguments);
  //   const arg2 = Array.from(arguments);
  //   console.log(typeof args);
  //   console.log(arg2);

  return a + b + c;
}
number(1, 2, 3);

// 4.Closure in loop
// Var sẽ bị Hoisting
// scope của var sau mỗi vòng lặp nó không thay đổi
// Hoisting ?
// for (var z = 1; z < 5; z++) {
//   setTimeout(function () {
//     console.log(z);
//   }, 1000);
// }

// 5. sự khác nhau giữa localStorage và sessionStorage
// 5.1 localStorage -> lưu giữa trên web
// => đóng tap trình duyệt thì vẫn  còn

// 5.2 sesstionStorage
// => đóng tap trình duyệt thì không

// 6. Những trường hợp không dùng arrow function
// Event handlers không nên dùng arrow function
const input = document.querySelector(".input");
// dùng arrow function thì this nó undefined
input.addEventListener("keyup", () => {
  // console.log(this.value);
});

// 7. Object ,<- arrow function
const student = {
  counter: 0,
  increment: () => {
    return ++this.counter; //<- arrow function dùng như này ra NaN
  },
};
// console.log(student.increment());

// Bài 286: Tìm hiểu object Set

const mySet = new Set();
mySet.add(1);
mySet.add("ThanhDev");

console.log(mySet);
mySet.has(1); // true
mySet.delete("ThanhDev");

// console.log(mySet.size);
mySet.clear();
// console.log(mySet.size);

// const arr = [1,2,3,4,5,6,7,7,2,2,4,5,8,9];

const arr3 = [1, 2, 3, 4, 5, 6, 7, 7, 2, 2, 4, 5, 8, 9];

// arr to set
// Set => dùng lấy giá trị duy nhất
const myset2 = new Set(arr3);
console.log(myset2);
// for of
for(let item of myset2){
  console.log(`item: ${item}`);
}

// set to arr
const newArray = Array.from(myset2);
console.log("Cách 1, dùng Set",newArray);


// Cách 2:
let result = [];
for (let index = 0; index < arr3.length; index++) {
  const element = arr3[index];
  if(!result.includes(element)){
    result.push(element);
  }
  
}
console.log("Cách 2 dùng for -> và includes() =>",result);