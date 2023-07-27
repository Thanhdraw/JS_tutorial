// 150 - sự kiện Click
// addEventListener
const btn = document.querySelector(".btn");
const span = document.querySelector(".btn span");
function handleClick(){
    console.log("You have clicked button");

}
// lỗi sai cần tránh khi dùng 
// function evenlistener khi goi hàm mà có thêm "addEventListener("click",handleClick())"
btn.addEventListener("click",handleClick,{
    capture:true
})
// click.addEventListener("click",function(){})

// Bài 151: Bubbling trong click

// span.addEventListener("click",function(e){
//     // e.stopPropagation();
//     e.stopImmediatePropagation();

//     console.log("Click span 2");
// })

span.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("Click span");
});


// Bài 152: Capturing trong click

span.addEventListener("click",function(e){
    // e.stopPropagation();
    e.stopImmediatePropagation();

    console.log("Click span 2");
})

