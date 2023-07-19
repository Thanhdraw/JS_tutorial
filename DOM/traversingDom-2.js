// nextElementSibling and previousElementSibling.
// 1. nextElementSibling
const span = document.querySelector("span");
const nextSpan = span.nextElementSibling;
console.log(nextSpan);

// 2. previousElementSibling

const previousElementSibling = span.previousElementSibling;
console.log(previousElementSibling);

// 3. childNode: Trả về nodeList bên trong and 
    // children: trả về các node ko bao gom text node

console.log(span.childNodes);
console.log(span.children);

// 4.firstChild and fistChildren

console.log(span.firstChild); //fistChild
console.log(span.firstElementChild); //strong>Traversing 2</strong>

// 5.lastChild and lastElementChild

console.log(span.lastChild); //fistChild
console.log(span.lastElementChild);