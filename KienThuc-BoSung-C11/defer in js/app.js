const btn = document.querySelector(".button");

// function handlemousemove(e) {
//   console.log(e.clientX);
// }
// document.addEventListener("mousemove", handlemousemove);

// btn.addEventListener("click", function () {
//   document.removeEventListener("mousemove", handlemousemove);
// });

function handleClick() {
  console.log("clicked - 1");
}
function handleClick2() {
  console.log("clicked - 2");
}
// btn.onclick = handleClick;
// btn.onclick = handleClick2;

btn.addEventListener("click", handleClick);
btn.addEventListener("click", handleClick2,{
    once:true,
    // once chỉ chạy 1 lầnS
});

