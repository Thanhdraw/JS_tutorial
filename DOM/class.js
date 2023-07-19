// 1. selector.classList.add()
// class thì ghi liền ko có khoản trắng
const addClass = document.querySelector(".container");
addClass.classList.add("is-active");    

// 2. selector.classList.remove()
addClass.classList.remove("is-active");    


// 3. selector.classList.contains("container")
// Tức là kiểm tra xem coi chứa container hay khong


console.log(addClass.classList.contains("is-active"));
console.log(addClass.classList.contains("container"));

// 4. selector.classList.toggle("is-active");
// Nếu có chứa thì xoá nó đi, còn nếu không chứa thì thêm vào
addClass.classList.toggle("is-active");

// 5.selector.className -> trả ra danh chuỗi các class của selector

const title = document.querySelector(".title");
console.log(title.className);
title.className = "title"



// 