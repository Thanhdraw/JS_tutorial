const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


toggle.addEventListener("click",handleToggleMenu);

function handleToggleMenu(event){
    // .add : hien ra
    // menu.classList.add("is-show");
    menu.classList.toggle("is-show");

    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");

}


document.addEventListener("click",handleClikOutMenu);

function handleClikOutMenu(event){
    // console.log(event.target);
    // Selector.contains // co chua hay khong
    if(!menu.contains(event.target) && !event.target.matches(".menu-toggle")){
        menu.classList.remove("is-show");
        toggle.classList.remove("fa-times");
        toggle.classList.add("fa-bars");

    }
}