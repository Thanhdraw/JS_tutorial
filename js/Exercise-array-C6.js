// Bài tập 1: Đảo ngược chuỗi
// Viết một chương trình JavaScript để đảo ngược một chuỗi đã cho.

// Yêu cầu:
// Hãy tạo một hàm có tên là daoNguocChuoi nhận vào một tham số là một chuỗi (string).
// Hàm daoNguocChuoi sẽ trả về một chuỗi mới, là phiên bản đảo ngược của chuỗi đã cho.
// Không sử dụng các hàm có sẵn như reverse().


//Cách 1: Phuong thuc su dung reverse
// function reverseString(){ 
//     let str = 'dangquocthanh';
//     if(!str) return null;
//     console.log(str);
//     // console.log(typeof(str));
//     const newString = str.split('');
//     const reverseStr = newString.reverse().join('');
//     // phuong thuc reserse chỉ áp dụng cho chuỗi khong áp dụng từ khoá cho mảng
//     console.log(reverseStr);
//     // console.log(typeof(reverseStr));

// }
// reverseString();
// Uncaught SyntaxError: Identifier 'str' has already been declared (at Exercise-array-C6.js:10:9)



// Cách 2: Phuong thuc khong su dung string

// const reverseStringNew = (str) => {
//     const array = ["QuocThanh", "KimTuyen"];
//     let Reverse = '';
//     for (let index = array.length -1 ; index>=0; index--) {
//          Reverse += array[index];
//     }
//     // return Reverse;
//     console.log(Reverse);
// }
// reverseStringNew();



// Bài 2: Đảo ngược chuỗi và cả kí tự

// function reverseString() {
//     str= ["quocthanh", "Nodejs", "Javascript","full-stack"];
//     // Đảo ngc chuỗi
//     const daonguocchuoi = str.reverse();
//     console.log(daonguocchuoi);
//     // Đảo nguoc kí tự
//     const daonguockitu = daonguocchuoi.map(item => item.split("").reverse().join(""));
//     console.log(daonguockitu);
// }
// reverseString();


// In hoa chu cai dau tien trong chuoi
function capitalizeWord(word = ""){
    if(word.length ===0) return null;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
// Hàm capitalizeWord nhận một tham số là word và mặc định nó là một chuỗi rỗng "".
    // Dòng đầu tiên kiểm tra nếu word không có độ dài (length) (tức là chuỗi rỗng), thì hàm sẽ trả về giá trị null và kết thúc.
    // Dòng thứ 2 tạo một biến newWord để lưu ký tự đầu tiên của word đã được chuyển thành chữ in hoa.
    // .toLowerCase() chuyển đổi word thành chữ thường.
    // .charAt(0) lấy ký tự ở vị trí đầu tiên (index 0) của word.
    // .toUpperCase() chuyển đổi ký tự đầu tiên thành chữ in hoa.
    // Dòng thứ 3 tạo một biến otherWord để lưu phần còn lại của word đã được chuyển thành chữ thường.
    // .toLowerCase() chuyển đổi word thành chữ thường.
    // .slice(1) cắt bỏ ký tự đầu tiên (index 0) của word, để lấy phần còn lại của word.
// Dòng cuối cùng trả về kết quả là chuỗi mới được tạo thành từ việc ghép newWord và otherWord lại với nhau.


function capitalizeStr(str){
    if(!str) return null;
    const result = str.split(" ").map(capitalizeWord).join(" ");
    console.log(result);
}

capitalizeStr("tôi là dang quoc thành");

// Hàm capitalizeStr nhận một tham số là str.
    // Dòng đầu tiên kiểm tra nếu str không tồn tại (falsy) (tức là null, undefined, hoặc chuỗi rỗng), thì hàm sẽ trả về giá trị null và kết thúc.
    // Dòng thứ 2 tạo một biến result để lưu kết quả cuối cùng.
    // .split(" ") chia chuỗi str thành một mảng các từ bằng cách tách chúng bằng khoảng trắng.
    // .map((item) => capitalizeWord(item)) áp dụng hàm capitalizeWord lên từng phần tử trong mảng và trả về một mảng mới với các từ đã được viết hoa chữ cái đầu tiên.
    // .join(" ") ghép các từ trong mảng lại thành một chuỗi, cách nhau bởi khoảng trắng.




    // const person1 = {
    //     name: "John",
    //     age: 30,
    //     city: "New York"
    //   };
      
    //   const jsonString1 = JSON.stringify(person1);
      
    //   console.log(jsonString1);
    //   // Output: {"name":"John","age":30,"city":"New York"}
      


    // const jsonString = '{"name":"John","age":30,"city":"New York"}';

    // const person = JSON.parse(jsonString);

    // console.log(person);


    // Sao chep 1 mảng
    // Cách 1
    const student = ["a", "b", "c", "d"];
    // const studentClone = student.slice();
    // Cách 2: spread operator
    // const spreadStudent = [...student];
    // console.log(spreadStudent);


    // ==========================================
    // Gộp mảng
    // const array1 = [1, 2, 3];
    // const array2 = [4, 5, 6];
    // const value = 7;

    // const newArray = array1.concat(array2, value);

    // console.log(newArray);
// Output: [1, 2, 3, 4, 5, 6, 7]
// Gộp mảng bằng spread operator
    // const array3 = [1, 2, 3];
    // const value5 = 4;
    // const stringText = "thanhne"
    // const array4 = [5, 6];

    // const mergedArray = [...array3, value5,stringText ,...array4];

    // console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6]


const numbers = [1, 2, 3, 4, 5];

const [firstNumber, secondNumber, ...restNumbers] = numbers;

console.log(firstNumber);
// Output: 1

console.log(secondNumber);
// Output: 2

console.log(restNumbers);
// Output: [3, 4, 5]

// Day 14: 06/07/2023


// const arr = [ 1,2,3,4,7,8];
// // C1 : sao chép mảng bằng Push
// const arrCopy = [];
// for(let i = 0; i<arr.length ; i++){
//     arrCopy.push(arr[i]);
// }
// console.log(arrCopy);

// C2 sao chép mảng bằng spread-operator
// const arrOperator = [...arr];
// console.log(arrOperator)

// Bài tập 1: Tính tổng các số từ 1 đến n
// Yêu cầu: Viết một chương trình sử dụng 
// vòng lặp for để tính tổng của các số từ 1 đến n, 
// trong đó n là một số nguyên dương nhập từ người dùng.
    // var input = prompt("Nhập mảng: ");
    // var arr = input.split(" ");
    // var result = 0;

    // for (let i = 0; i < arr.length; i++) {
    // result += parseInt(arr[i]);
    // }

    // console.log(result);

// var input = prompt("Nhập các giá trị của mảng, phân tách bằng dấu cách: ");
// var arr = input.split(" ");

// console.log(arr);

    // var str = "dang quoc thanh";
    // var result = " ";
    // for(let i =str.length -1 ; i >= 0; i--){
    //     console.log(str[i]);
    //     result = result + str[i];
    // }
    // console.log(result);


// White 
    // let number2 = 0;
    // while(i<10){
    //     console.log("number: " +i);
    //     i++;
    // }

// do - while
    // let number2 = 1;

    // do{
    //     number2++;
    //     console.log("number: " +number2);
    // } while (number2<10) ;

    // Bài 4: Loại bỏ phần tử trùng lập
    const arr = [ 1,2,1,2,3,4,5,6,6,7,9];
    const arr2 = [];
    function checkNumber(count){
        for(let i =0; i<arr.length; i++){
           if(!arr2.includes(arr[i])){
            arr2.push(arr[i]);
           }
        }
       console.log(arr2);
    }
    checkNumber();

// Bài 5:
// ([1,2,3,4,5,6],3) -> [[1,2,3],[4,5,6]]
// [[1,2,3],[4,5,6]];
function sliptArray(array,number){
    let result = [];
    let index =0;
    while(index < array.length){
        result.push(array.slice(index,number + index));
        index = index + number;
    }
    // console.log(array.length);
    console.log(result);
    return result;
}
sliptArray([1,2,3,4,5,6],2);

