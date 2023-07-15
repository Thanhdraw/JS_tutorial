// 1.document.querySelector
const element = document.querySelector('h1');
const element2 = document.querySelector(".container");
const element3 = document.querySelector("#spiner");

// 2. document.querysdelectorAll()
// Nó có thể loop được

const element4 = document.querySelectorAll(".item");
console.log(element4)

//  3. document.getElementByClassName()

const classNode = document.getElementsByClassName("header");
// console.log(classNode); 

// 4. document.getElementsByTagName()

const tagName = document.getElementsByTagName("h1");
// console.log(tagName);

//  5. document.getElementById()

const getId = document.getElementById("spiner");
// console.log(getId);


// 6. GetAttribute()
const attribute = document.querySelector(".link");
console.log(attribute);
console.log(attribute.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach(item =>{
    console.log(item.getAttribute("class"));
})

// 7. setAttribute()

attribute.setAttribute("target","_blank");

//  8.removeAttribute(): xoá phần tư attribute

const p =document.getElementById("spiner");
// p.removeAttribute("style");

// 9.hasAttribute()

console.log(p.hasAttribute("id")); //true
console.log(p.hasAttribute("class")); //false

// Mai học 119






