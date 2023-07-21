// 1. Viết 1 function tạo ra thông báo
// insertAdjacentHTML
function createNotificatioN(title = "Welcome to notification"){
    const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" 
    alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
      </p>
    </div>
  </div>`;

  document.body.insertAdjacentHTML("afterbegin",template);

}

const randomData = ["Welcome to Javascript course", "Welcome thành nè", "Today is a goodday", "I am full-stack Developer"];

let lastTitle;

// createNotification();
const timer = setInterval(function(){
    const item = document.querySelector(".noti");
    if(item) item.parentNode.removeChild(item);
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    if(lastTitle !== title){
        createNotificatioN(title);
    }
    lastTitle = title;
},4000)


