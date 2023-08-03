const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-overlay"></div>
<div class="modal-content">
  <span class="modal-close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </span>
  <div class="modal-main">
   
  </div>
</div>
</div>`;
button.addEventListener("click", function () {
  // console.log("it is work!");
  document.body.insertAdjacentHTML("beforeend", template);
});

document.body.addEventListener("click", function (event) {
  if (event.target.matches(".modal-close")) {
    const modal = event.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  }
  
});

// modalClose.addEventListener("click",handleClose);

// function handleClose(event){

// }
