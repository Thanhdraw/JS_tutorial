// 1. keydown: Hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.which);
  // ascii MDN
  // e.key: key nhập vào
  //   if (e.key === "Enter") {
  //     console.log("You hit Enter!");
  //   } else {
  //     console.log(e.key);
  //   }
  // console.log(e.key);
  // if (e.key === "Home") {
  //   console.log("working");
  // }
});
// 2. keyup: Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
// input.addEventListener("keypress", function (e) {
//   console.log(e.key);
//   e.preventDefault();
// });

// Day 27: 09/08/2023

// change: xay ra khi ta go xong , sau đó ta nhấn ra ngoài 1 lần hoặc Enter

// input.addEventListener("change",function(e){
//   console.log("working");
// })

// Focus: Hoạt động khi element được chọn
// input.addEventListener("focus",function(e){
//   console.log("Have already Forcus");
// });

// 7.submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // this, event.target
  // this.element
  // console.log(e.elements.value);
  // console.log(this.elements);
  // console.log(this.elements["name"]);
  // console.log(this.elements["name"].value);
  // console.log(this.elements["hobby"].value);
  // const hobby = this.elements["hobby"];
  const hobby = document.querySelectorAll(`input[name="hobby"]`);
  const gender = this.elements["gender"].value;
  const name = this.elements["name"].value;
  console.log({name,gender,hobby});
  let hobbyValue =[];
  [...hobby].forEach(item=> hobbyValue.push(item.value));
  console.log(hobbyValue);
});


