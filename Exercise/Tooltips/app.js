window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (event) {
    const title = event.target.dataset.tooltip;
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";

    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);
    const cords = event.target.getBoundingClientRect();
    const { top, left, width, height } = cords;
    const tooltipHeight = tooltipDiv.offsetHeight;
    const tooltipWidth = tooltipDiv.offsetWidth;
    const triagleHeight = 20;
    tooltipDiv.style.left = `${left - width / 2}px`;
    tooltipDiv.style.top = `${top - tooltipHeight - triagleHeight}px`;
  });
  text.addEventListener("mouseleave",function(event){
    const tooltip = document.querySelector(".tooltip-text");
    if(!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  });
});
