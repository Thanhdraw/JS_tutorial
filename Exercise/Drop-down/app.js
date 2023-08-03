const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownList = document.querySelector(".dropdown__list");
dropdownSelect.addEventListener("click",handleDropdown);
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdown = document.querySelector(".dropdown");
const dropdownCaret = document.querySelector(".dropdown__caret");
function handleDropdown(event){
    // cách 2 dùng: nextElementSibling
    // const dropDown = event.target.nextElementSibling;
    // console.log(dropDown);

    // if(dropDown){
    //     dropDown.classList.toggle("show");

    // }
    dropdownList.classList.toggle("show");
    dropdownCaret.classList.toggle("fa-caret-up");
}

const dropdownItem = document.querySelectorAll(".dropdown__item");

dropdownItem.forEach(item => item.addEventListener("click",function(event){
    const textItem = event.target.querySelector(".dropdown__text").textContent;
    dropdownSelected.textContent = textItem;
    dropdownList.classList.remove("show");
}));


document.addEventListener("click",function(e){
    console.log(e.target);
    if(!dropdown.contains(e.target)){
        dropdownList.classList.remove("show");
    }
})