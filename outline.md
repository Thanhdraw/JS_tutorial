Chương 1: Overview
Day 1: 
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
            

        
            
                