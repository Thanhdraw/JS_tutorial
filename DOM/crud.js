// 1. Tạo element trong js
// document.createElement("tag")
// Tag: body, div , strong

const div = document.createElement("div");

// 2. document.appendChild()
    const body = document.body;
    body.appendChild(div);
    div.classList.add("container");
    div.className = "container wrapper";
    const textContent = document.querySelector("div");
    
    div.textContent = "lorem thành nè";
    div.innerHTML = `<div class = "content"><h3>Nhat Phuong</h3></div>`;
    div.setAttribute("data-name","evondev");

// 3. document.createTextNote()
    // Tạo một ghi chú văn bản mới
    var note = document.createElement("p"); // Tạo một phần tử <p> mới

    // Đặt nội dung văn bản cho ghi chú
    note.textContent = "asdasdhiashdoiahwhdihqwhdhqiowh";

    // Tìm phần tử mà bạn muốn thêm ghi chú vào
    // var container = document.getElementById("noteContainer");

    // Thêm ghi chú vào phần tử container
    





// Bài tập minh hoạ

const card = document.createElement("div");
card.classList.add("card");
// const body = document.body;
// in 
body.appendChild(card);
const cardImg = document.createElement("img");
cardImg.setAttribute("src","https://source.unsplash.com/random");
// cardImg.classList.add("cardimage");
cardImg.setAttribute("class","cardimge");
card.appendChild(cardImg);

// 
// 3. document.createTextNote()

const text = document.createTextNode("Hello, I created createTextNode");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);



// 4. Clone Node; element clone
// tạo bản sao H1
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

// 5. Phương thức hasChildNodes -> kiểm tra có phần tử con hay không,
    //  nếu có trả
    // về true ko thì trả về false

console.log(h1.hasChildNodes());

const h3 = document.querySelector("h3")


// 6. insertAdjacentText
// h3.insertAdjacentText("possition","text");
    h3.insertAdjacentText("beforebegin","begin");
    h3.insertAdjacentText("afterbegin","afterbegin");
    h3.insertAdjacentText("beforeend","beforeend");
    h3.insertAdjacentText("afterend","afterend");


// 7. Phương thức insertAdjacentElement

    const strong = document.createElement("strong");
    strong.classList.add("bold");
    h3.insertAdjacentElement("beforeend",strong);

// 8.Phương thức insertAdjacentHTML

    const template = 
    `<ul class="menu">
    Phương thức insertAdjacentHTML
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>`;
    document.body.insertAdjacentHTML("beforeend",template);
    // cái này là possition cho xuất hiện trc khi ket thuc thẻ body
    // parse sang html


// 9. Traversing DOM phần 1
// Những vấn đề liên quan đến DOM

    // Bài 133:
    // 9.1: parentNode,parentElement, removeChild
    // parentNode:
        const span = document.querySelector("span");
        console.log(span.parentNode.parentNode);
        console.log(span.parentElement.parentElement);
    //10. selector.parentNode hoac selector.parentElement.removeChild

    //    span.parentNode.removeChild(span);
        // span.remove();

// 10.Traversing DOM phần 2

    // 10.1: NextElementSibling:Tìm tới phần tử kế tiếp, 

        const nextSpan = span.nextElementSibling;
        console.log(nextSpan);

    // 10.2 previousElementSibling: tìm tới phần từ đứng sau nó.
        const previousLink = span.previousElementSibling;
        console.log(previousLink);


    // 10.3 childNode vs children
    
        // childNode: trả về hết các nodeList ben trong bao gồm textNodes vs 
        // children: trả về các node ko bao gồm các textNode.

        console.log(span.childNodes);//text strong text
        console.log(span.children); 

    // 11 firstchild vs firstElementChild
        // 11.1 firstchild
        console.log(span.firstChild); //text

        // 11.2 firstElementChild
        console.log(span.firstElementChild);  //<strong>

console.log("#####lastchild và lastElementChild#####");
    // 12. lastchild vs lastElementChild
      // 11.1 lasttchild
      console.log(span.lastChild); //text

      // 11.2 lasttElementChild
      console.log(span.lastElementChild);
















