document.addEventListener("DOMContentLoaded", function () {
  console.log("DomLoaded");
});

window.addEventListener("load", function () {
  console.log("your web loaded");
});

// MouseMove
// const btn = document.querySelector(".button");
// btn.addEventListener("mousemove",()=> {
//     console.log("mousemove");
// });

// mouseover: hoạt động khi rê chuột và con của ptử đó
// const btn = document.querySelector(".button");
// btn.addEventListener("mouseover",()=> {
//     console.log("mouseover");
// });
// mouseEnter: hoạt động khi rê chuột vào ptử
// const btn = document.querySelector(".button");
// btn.addEventListener("mouseenter",()=> {
//     console.log("mouseenter");
// });
// mouseleave: hoạt động khi rê chuột vào ptử và rê ra ngoài sẽ tính là hoạt động (vừa vào vừa ra)
// const btn = document.querySelector(".button");
// btn.addEventListener("mouseleave",()=> {
//     console.log("mouseleave");
// });
// ========================================================================================================

document.addEventListener("mousemove", (event) => {
  console.log(`pageX: ${event.pageX}
                    pageY: ${event.pageY} 
                    clientX: ${event.clientX}
                    clientY: ${event.clientY}`);
});
