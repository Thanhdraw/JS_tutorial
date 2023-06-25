Chương 1: Overview

    Cú pháp console.log để hiển thị thông tin trong console.
    Các loại biến trong JavaScript: var, const, let.
    Phạm vi của biến: block-scope, function-scope, global-scope.
    Hoisting: khai báo biến sau khi sử dụng.
    Temporal dead-zone: không thể truy cập biến trước khi khai báo giá trị.

Chương 2: Các kiểu dữ liệu trong JavaScript

    Kiểu dữ liệu string: chuỗi ký tự.
    Một số phương thức thường được sử dụng trên chuỗi như length, indexOf, toLowerCase, toUpperCase, replace, slice, trim, substr, substring.
    Kiểu dữ liệu number: số.
    Các phương thức và toán tử liên quan đến số như toFixed, parseInt, parseFloat, Math.abs, Math.floor, Math.ceil.
Day 3:

    Tiếp tục với các phương thức trên chuỗi như repeat, startWith, endWith.
    Phương thức trimStart, trimEnd để bỏ khoảng trắng bên trái và bên phải chuỗi.
    Phương thức slice để cắt một phần của chuỗi.
    Phương thức subStr và substring để cắt một phần của chuỗi.
    NaN (Not a Number): giá trị đặc biệt chỉ ra rằng giá trị không phải là số.
Day 4:

    Chuyển đổi giữa kiểu dữ liệu number và string.
    NaN (Not a Number): giá trị đặc biệt chỉ ra rằng giá trị không phải là số.
    Type coercion: chuyển đổi kiểu dữ liệu tự động trong biểu thức.
    Sử dụng toán tử + để nối chuỗi và số.
Day 5:

    Toán tử so sánh và toán tử logic.
    Câu điều kiện if-else để thực thi mã dựa trên điều kiện.
    Các phương thức alert, prompt và confirm để hiển thị thông báo và xác nhận với người dùng.

Day 6:

    Cấu trúc switch-case để kiểm tra nhiều giá trị khác nhau.
    Toán tử ba ngôi (ternary operator) để rút gọn câu điều kiện if-else.
    Đó là tóm tắt những gì bạn đã học trong tuần 1 về JavaScript.

Week 1: Question and Answers:
    Dưới đây là ba câu hỏi liên quan đến những khái niệm và kiến thức bạn đã báo cáo trong tuần đầu tiên về JavaScript:

    + Trong JavaScript, khái niệm "hoisting" áp dụng cho những gì? Hãy mô tả ngắn gọn cách hoisting hoạt động và đưa ra ví dụ cụ thể.
        =>Hoisting là trong js , là kiểu khi js thực thi thì nó sẽ chuyễn phần khai báo biến lên đầu trước cú pháp hoặc hàm để in ra biến đó.
        => Điều này chỉ áp dụng cho khai báo biến bằng từ khóa var. Trong trường hợp khai báo biến bằng let và const, hoisting cũng xảy ra, nhưng biến sẽ có phạm vi chỉ trong khối mã mà nó được khai báo.

        Vd: console.log(x); // Output: undefined
            var x = 10;
            console.log(x); // Output: 10



   +  Có sự khác nhau nào giữa phương thức slice(), substring() và substr() trong JavaScript? Hãy giải thích sự khác nhau về cách sử dụng và kết quả trả về của chúng.

        =>slice() và substring() có cách sử dụng tương tự nhau và trả về kết quả cắt chuỗi dựa trên các chỉ số bắt đầu và kết thúc.
        - substr() sử dụng chỉ số bắt đầu và độ dài để cắt chuỗi.
        - substring() không chấp nhận các chỉ số âm, trong khi slice() và substr() có thể sử dụng chỉ số âm.

    + Trong JavaScript, phương thức isNaN() và Number.isNaN() có sự khác biệt như thế nào trong việc kiểm tra NaN? Hãy mô tả cách sử dụng của mỗi phương thức và giải thích sự khác biệt giữa chúng.
        +NaN: 
            =>Phương thức isNaN(): Phương thức isNaN() được sử dụng để kiểm tra xem giá trị có phải là NaN hay không. Nó chuyển đổi đối số truyền vào thành một giá trị số và sau đó kiểm tra xem giá trị đã chuyển đổi có phải là NaN hay không. Phương thức này thực hiện việc chuyển đổi ngầm (implicit conversion), do đó nó sẽ cố gắng chuyển đổi đối số thành số trước khi kiểm tra.

        +Number.isNaN():Phương thức này không thực hiện chuyển đổi ngầm (implicit conversion), nghĩa là nó chỉ trả về true nếu giá trị truyền vào là NaN, ngược lại sẽ trả về false.

        
        =>Lưu ý rằng phương thức isNaN() sẽ cố gắng chuyển đổi đối số truyền vào thành số trước khi kiểm tra, trong khi Number.isNaN() không thực hiện chuyển đổi ngầm và chỉ kiểm tra trực tiếp xem giá trị có phải là NaN hay không.
        isNaN("Hello"); // true, vì "Hello" không thể chuyển đổi thành số
        Vidu:
            isNaN("123"); // false, vì "123" có thể chuyển đổi thành số
            isNaN(NaN); // true, vì NaN là NaN

            Number.isNaN("Hello"); // false, vì "Hello" không phải là NaN
            Number.isNaN("123"); // false, vì "123" không phải là NaN
            Number.isNaN(NaN); // true, vì NaN là NaN

            // Ví dụ sử dụng với các biến
            const x = 10;
            const y = "abc";
            const z = NaN;

            isNaN(x); // false, vì x là một số
            isNaN(y); // true, vì y không thể chuyển đổi thành số
            isNaN(z); // true, vì z là NaN

            Number.isNaN(x); // false, vì x không phải là NaN
            Number.isNaN(y); // false, vì y không phải là NaN
            Number.isNaN(z); // true, vì z là NaN

