const now = new Date();
console.log(now.getTime());
// new Date() -> in ra ngày giờ hiện tại
// .getTime() -> in ta thời gian tính bằng miliseconds

// getFullyear();
const birthDay = new Date(2001,12,28);
// console.log(birthDay.getFullYear());
console.log(birthDay.getDate());
// in ra thứ
console.log(birthDay.getDay());//1
// 0 - 6:
// 0 là chủ nhật
// 6 là thứ 7
 // in ra giờ
 console.log(birthDay.getHours());
 console.log(birthDay.getMinutes());
//  in ra timestamp
console.log(birthDay.getTime());


 