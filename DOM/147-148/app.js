const ul = document.querySelector("ul");


// document .body.insertBefore(ul,document.querySelector("h1"));

// insertAdjacentElement


// Tìm hiểu thêm phương thức replaceChild
    // replaceChild
    // node.replaceChild(newnode,oldnode)

    const span = document.createElement("span");
    span.textContent = "abc";
    document.body.replaceChild(span,document.querySelector(".boxed"));
    // convertHTMLCollection,Nodelist to Arr

const li = document.getElementsByTagName("li");

// 1.Array.from(HTML COllection or NodeList)
// 2.[...HTMLCOLLECT],[...nodeList]
[...li].forEach(item => item);
console.log(li);

// html body head title
// html: document.documetElement
// body: document.body
// head: document.head
// title: document.title



