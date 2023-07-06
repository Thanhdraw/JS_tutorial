Day 12: 03/07/2023:

    <!-- -Foreach() //  -->



    <!-- By Value  (theo giá trị) ám chỉ cách sao chép và truyền giá trị nguyên thủy,
    Khi một giá trị nguyên thủy được gán cho một biến mới hoặc truyền vào một hàm, 
    một bản sao của giá trị đó sẽ được tạo ra và sử dụng độc lập với giá trị gốc. -->
    ví dụ về "By value" 
    let a = 5;
    let b = a; // Tạo một bản sao của giá trị 5
    b = 10;   // Không ảnh hưởng tới giá trị của biến a
    console.log(a); // Output: 5
    console.log(b); // Output: 10



    <!-- by reference" (theo tham chiếu) ám chỉ cách sao chép và truyền đối tượng. -->
    Khi gán một đối tượng cho một biến mới hoặc truyền đối tượng vào một hàm, một tham chiếu (reference) 
    đến đối tượng đó được tạo ra và chia sẻ giữa các biến hoặc tham số. 
    Điều này có nghĩa là khi bạn thay đổi đối tượng thông qua một biến,
    các biến khác chia sẻ cùng một tham chiếu và sẽ thấy những thay đổi đó.



    let obj1 = { value: 5 };
    let obj2 = obj1; // Tạo một tham chiếu đến cùng một đối tượng
    obj2.value = 10;
    console.log(obj1.value); // Output: 10
    console.log(obj2.value); // Output: 10
