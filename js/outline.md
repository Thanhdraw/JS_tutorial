Chương 1: Overview
Day 1: (18/06/2023) 
    -Console.log
    - Variables (biến);
    - Delcare (khai báo biến) 
        - var 
        - const 
        - let
        - scope(phạm vi)
            + block-scope(phạm vi khối)
            + Function-scope(phạm vi chức năng)
            +Global-scope(phạm vi toàn cục)
        - Hoisting (khai báo sau, thực hiện hoặc truy cập trước)
            - Temporal dead-zone -> không thể truy cập được biến
                                    khi chưa được khai báo giá trị.

Chương 2: Các kiểu dữ liệu trong Javascript

Day 2 (19/06/2023)
    - string 
    - string method
        .typeOf() // kiểu dữ liệu
        .length() // Độ dài của phần tử
        . Index() // vị trí của phần tử
        . Slit() // Tách kí tự
        . ToLowerCase // In thường
        . ToUpperCase // In hoa
        . StartWith() // bắt đầu ở phần tử đầu tiên
        . EndWith()   // bắt đầu ở phần tử cuối cùng
        . Include // tìm kiếm phần tử có chứa 
        . IndexOf() // Tìm kiếm vị trí đầu tiên của phần tử cần tìm
        . lastIndexOf() // Tìm kiếm vị trí cuối cùng

Day 3 (21/06/2023):

    - replace // thay thế phần tử
    - repeat // lặp lại
    - slice // là cắc phần tử của 1 chuỗi (startIndex, EndIndex)
        ví dụ:
            const arr = [1, 2, 3, 4, 5];
            const slicedArr = arr.slice(1, 4); EndIndex(n-1) // 
            console.log(slicedArr); // Output: [2, 3, 4]
        - slice(-1) -> lấy phần tử từ cuối cùng, tức là từ phải qua 
                        const slicedArr = arr.slice(-1)
                        console.log(slicedArr); // Output: [5]

    - trim() // bỏ khoảng trống trái phải
        - trimStart() // bỏ khoảng trống bên trái
        - trimEnd()  // bỏ khoảng trống bên phải
    - subStr() // Cắt 1 phần của một chuỗi và trả về chuỗi mới sau 
                    sau khi cắt,
                    Bắt đầu từ vị trí muốn cắt
                ví dụ: 
                    const str = "Hello, world!";
                    const substrResult = str.substr(7);
                    console.log(substrResult); // Output: "world!"
                Khác: Substr(StartInDex,length) // vị trí bắt đầu và độ dài mún cắt 
                ví dụ:
                    const str = "Hello, world!";
                    const substrResult = str.substr(7, 5);
                    console.log(substrResult); // Output: "world"
    
    -subString() //
            phương thức substring() được sử dụng để cắt một  phần của một chuỗi và trả về một chuỗi mới chứa phần đã cắt đó. Phương thức này cũng có hai cách sử dụng chính:

                - ví dụ:
                const str = "Hello, world!";
                const substringResult = str.substring(7);
                console.log(substringResult); // Output: "world!"
                    
            => Lưu ý rằng phương thức substring() sẽ trả về một     chuỗi mới chứa phần đã cắt, và không ảnh hưởng đến chuỗi gốc. Cũng lưu ý rằng substring() không chấp nhận chỉ số âm, nếu bạn truyền vào một số âm, nó sẽ được coi là 0.


Day 3 (phần 2):

    - Các kiểu dữ liệu về Numvber:
        - To fixed(number) vd: 0,33333 -> 0,33
        - parsInt // chuyển đổi só nguyên
        - parsFloat // chuyển đổi số thập phân
        - Math.abs()
        - Math.Floor // làm tròn chữ số thập phân
        - Math.ceil // Cũng là làm tròn số vf: 4,3->5
        - Math.round(value) => làm tròn gần nhất: vd: 4,3 -> 4,5
        - 
    - isNaN => Not a number
            -> Lưu ý check ko phải số
    - Number.isNaN
    - Falsy values vs truethy Values
    - Falsu value: ""

- Math.max -> trả ra con số lớn nhất 
- Math.min -> trả ra con số nhỏ nhất
- Math.pow() -> số mũ

- Day 4 (22/06/2023):
    
    -Tìm hiểu về Number:
        - Number()
        - NaN // Not a Number
        - String ()

    - Type coericion: kiểu dữ liệu <=> kiểu dữ liệu khác
        (+, - ,*, /)

- Day 5: (23/06/2023):

    // >,<, >=, <=
    
    - Toán tử Logic ( && || , !)
    - Toán tử so sánh:
        - (==) // so sánh về giá trị
        -(===) // Vừa so sánh về giá trị vừa so sánh về kiểu dữ liệu

    - Câu điều kiện
    - promp , confirm, alert
        alert() // hiển thị thông báo
        promt() // Hiển thị thông báo hiển thị form.nhap
        Confirm() // Xác nhận thông tin (Ok hoặc cancel)
                => trả về giá trị True or False

- Day 6(24/06/2023):

    - Swtich Case // Giúp ta có nhiều sự lựa chọn hơn 
        -> default: giá trị mặt định
    - Terrary Operator // Cách viết If và else rút gọn
        -> như: ? true : false

        
            
                