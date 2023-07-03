// function sum(a,b){
//     console.log(a+b);
//     return (a+b);
// }

// function average(a,b){
//     const sumResult = sum(a,b);
//     return (sumResult)/2;
// }
// const result = average(300,400)

// console.log(`result: ${result}`);


// function showCar() {
// 	let name = 'ferariw';

// }
// showCar();
// console.log(name);
//--> Ta không thể sử dụng biến name ở đây



// Bài tập 1: Tính tổng hai số
// Viết một function có tên là sum nhận vào hai số và 
// trả về tổng của chúng. Sau đó, gọi function với hai số bất kỳ và in kết quả ra màn hình.

// function sum(a,b){
//     return a+b;
// }
// const a = prompt("Nhap a: ");
// const b = prompt("Nhap b: ");
// const result = sum(a,b);
// console.log(`result: ${result}`);
function sum(a, b) {
    return a + b;
  }
  
//   const a = parseInt(prompt("Nhap a: "));
//   const b = parseInt(prompt("Nhap b: "));
  const result = sum(2,3);
  console.log(`result: ${result}`);
  
//   Bài tập 2: Kiểm tra số chẵn lẻ
//   Viết một function có tên là 
// checkEvenOdd nhận vào một số và kiểm tra 
// xem số đó có phải là số chẵn hay số lẻ. 
// Function sẽ in ra thông báo tương ứng "Số là chẵn" hoặc "Số là lẻ". 
// Gọi function với một số bất kỳ và kiểm tra kết quả.
// console.log("***** Exercise Function *****");

// function checkEvenOdd(a){
    
//     if(a%2==0){
//         console.log("Number is Event");
//     }
//     else{
//         console.log("Number is Odd");
//     }
// }
// checkEvenOdd(5);

// Bài tập 3: Tính giai thừa
// Viết một function có tên là factorial (n*(n-1))
// nhận vào một số nguyên dương và tính giai thừa của số đó. 
// Sử dụng vòng lặp for hoặc đệ quy để thực hiện tính toán. 
// In kết quả giai thừa ra màn hình.

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
//   factorial(5);
  console.log(factorial(5));    
