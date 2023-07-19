const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
document.body.appendChild(modal);

const modalClose = document.createElement("i");
modalClose.className="fa fa-times modal-close";
modalContent.appendChild(modalClose);
// document.body.appendChild(modalContent);


const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nobis autem excepturi eaque rerum neque. Officiis magnam ab eaque minus possimus tempore assumenda id modi.Assumenda voluptatem distinctio nemo cum.";
modalContent.appendChild(modalDesc);

const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);

const btnSubmit = document.createElement("button");
const btnCancel = document.createElement("button");
btnSubmit.classList.add("modal-submit");
btnCancel.classList.add("modal-cancel");
modalAction.appendChild(btnSubmit);
btnSubmit.textContent = "Confirm";

modalAction.appendChild(btnCancel);
btnCancel.textContent = "cancel";












{/* <div class="modal">
        <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
            <div class="modal-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nobis autem excepturi eaque rerum neque. 
                Officiis magnam ab eaque minus possimus tempore assumenda id modi. 
                Assumenda voluptatem distinctio nemo cum.
            </div>
            <div class="modal-action">
                <button class="modal-submit">Confirm</button>
                <button class="modal-cancel">Cancel</button>
            </div>
        </div>
    </div> */}

//     const template = `<div class="modal">
//     <div class="modal-content">
//         <i class="fa fa-times modal-close"></i>
//         <div class="modal-desc">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nobis autem excepturi eaque rerum neque. 
//             Officiis magnam ab eaque minus possimus tempore assumenda id modi. 
//             Assumenda voluptatem distinctio nemo cum.
//         </div>
//         <div class="modal-action">
//             <button class="modal-submit">Confirm</button>
//             <button class="modal-cancel">Cancel</button>
//         </div>
//     </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin",template);


const modalWrapper = document.querySelector(".modal");
console.log(modal);
if(modal){
    setTimeout(function(){
        modalWrapper.classList.add("is-show");
    },3000);
}


// c3

