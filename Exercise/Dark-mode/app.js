// Lấy các phần tử cần thao tác
const body = document.body;
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener("click",function(){
    // Kiểm tra nếu trang đã có class 'dark-mode' thì xóa nó đi, ngược lại thêm vào
    body.classList.toggle('dark-mode');
});