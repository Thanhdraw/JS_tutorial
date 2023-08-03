const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
  console.log(event.target);
  const image = event.target.getAttribute("src");
  const template = `<div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}

let index = 0;

document.body.addEventListener("click", function (e) {
  const lightImage = document.querySelector(".lightbox-image");

  if (!lightImage) return;
  // Có lightImage
  let lightSrc = lightImage.getAttribute("Src");
  index = [...images].findIndex(
    (item) => item.getAttribute("src") === lightSrc
  );
  if (e.target.matches(".lightbox")) {
    //remove lightBox out of Dom từ thẻ body
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    //handle next img

    index = index + 1;
    if (index > images.length - 1) {
      index = 0;
    }
    displayaLightImage(lightImage,index);
  } else if (e.target.matches(".lightbox-prev")) {
    //handle Prev img

    index = index - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    displayaLightImage(lightImage,index);
  }
});

function displayaLightImage(lightImage,index) {
  const newSrc = [...images][index].getAttribute("src");
  lightImage.setAttribute("src", newSrc);
}
