// 1.Event scroll

window.addEventListener("scroll", function (e) {
  console.log("scroll");
});

// 2.debounce
// Hàm debounce
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, 1000);
  };
}

// Hàm thay đổi màu nền dựa trên vị trí cuộn dọc và ngang
function changeBackgroundColor() {
  const yOffset = window.pageYOffset;
  const xOffset = window.pageXOffset;

  // Chia 500px một phần để thay đổi màu sắc
  const colorChangeThreshold = 500;
  const color = `rgb(${(xOffset / colorChangeThreshold) * 255}, ${
    (yOffset / colorChangeThreshold) * 255
  }, 100)`;

  document.body.style.backgroundColor = color;
}

// Gọi hàm khi trang được cuộn (sử dụng debounce)
const debouncedChangeBackgroundColor = debounce(changeBackgroundColor, 50);
window.addEventListener("scroll", debouncedChangeBackgroundColor);
window.addEventListener("resize", debouncedChangeBackgroundColor);

// Gọi hàm lần đầu để áp dụng màu nền ban đầu
changeBackgroundColor();

// Thuộc tính scroll: scrollTop;  scrollLeft;  scrollTo;  scroll; scrollHeight;  scrollWidth; 
// window.scrollTo(x, y): Cuộn trang đến một vị trí cụ thể với tọa độ x (ngang) và y (dọc).
// window.scrollBy(x, y): Cuộn thêm một lượng cụ thể từ vị trí hiện tại. Ví dụ: window.scrollBy(0, 100) sẽ cuộn trang thêm 100 pixel dọc.

// element.scrollIntoView(options): Cuộn trang để làm cho phần tử được chọn hiển thị hoàn toàn trong cửa sổ trình duyệt. Bạn có thể cung cấp tùy chọn (options) để điều c


// 5.ScrollWidth và ScrollHeight // offsetWidth và offsetHeight

// 6.ScrollIntoView(); scroll tới phạm vi, mà có thể thấy nó
