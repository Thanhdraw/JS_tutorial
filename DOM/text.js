// 1. textContent();

const textContent = document.querySelector("#spiner");
// textContent.textContent = "Hello my text content";
// console.log(textContent.textContent);

// 2. InnerText(): loại bỏ hết khoảng trắng trong vs code



// 3. innerHTML()
const innerHtml = document.querySelector("#spiner");
// innerHtml.textContent = `<div class="demo">innerHTML</div>`

console.log(innerHtml.innerHTML);
innerHtml.innerHTML = `<div class="demo">innerHTML</div>`;

