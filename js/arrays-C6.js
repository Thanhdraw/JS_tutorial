// Bài tập 1: Đếm số lượng phần tử chẵn trong mảng

// Hãy viết một hàm có tên là demSoChan(arr) nhận vào một mảng arr 
// và trả về số lượng phần tử chẵn trong mảng đó.

// Ví dụ:

// Input: [1, 2, 3, 4, 5, 6]
// Output: 3

// Input: [10, 20, 30, 40, 50]
// Output: 5

// Yêu cầu:

// Hãy sử dụng vòng lặp và các phép toán trong quá trình giải bài tập.
// Hãy đảm bảo rằng bạn đang trả về kết quả chính xác.

// function demSoChan(arr){
//     var sum =0;
//     for(var i=0;i < arr.length;i++){
//         if(!isNaN(arr[i]) && arr[i] %2 ===0){
//             sum++;
//         }
//     }
//     return sum;
// }

// var arr = [1,2,3,4,5];
// console.log(demSoChan(arr));
// demSoChan(arr);
// console.log(sum);


// Bài tập 2: Kiểm tra phần tử tồn tại trong mảng
// Viết một hàm kiemTraTonTai(arr, element) 
// nhận vào một mảng arr và một phần tử element. 
// Hàm sẽ trả về true nếu element tồn tại trong mảng arr, ngược lại trả về false.

// function kiemTraTonTai(arr, element) {
//     return arr.indexOf(element)!=-1;
// }
// var array1 = [1, 2, 3, 4, 5];
// console.log("**Kiem tra ton tai hay khong**");
// console.log(kiemTraTonTai(array1, 3)); // Kết quả: true
// console.log(kiemTraTonTai(array1, 6)); // Kết quả: false

console.log("**Kiem tra noi chuoi**");
// Bài tập 2: Nối chuỗi trong mảng
// Viết một hàm noiChuoi(arr, separator) 
// nhận vào một mảng arr và một chuỗi separator. 
// Hàm sẽ trả về một chuỗi mới được tạo ra bằng cách nối các phần tử của mảng arr bằng chuỗi separator.

function noiChuoi(arr,separator){
    return arr.join(separator);
}

var arr = ["HTML","CSS","Reactjs","Reactjs"];
var separator = "Javascript";
console.log(noiChuoi(arr,separator));

function xoaTrung(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  
  var array3 = [1, 2, 3, 2, 4, 3, 5];
  // console.log(xoaTrung(array3)); 
  // => Kết quả: [1, 2, 3, 4, 5]

  var array3 = [1, 2, 3, 2, 4, 3, 5];
  const sapxep = array3.sort((a,b)=>(a>b ? -1 : 1));
  console.log(sapxep);

  // Quy trình của hàm như sau: 
  // var array3 = [1, 2, 3, 2, 4, 3, 5];
  // const sapxep = array3.sort((a, b) => a - b);
  // console.log(sapxep);
      // => Trong đoạn code trên, hàm so sánh (a, b) => a - b được truyền vào phương thức sort(). 
      // Nếu a nhỏ hơn b, hàm trả về một số âm, đặt a trước b. Ngược lại, nếu a lớn hơn b, 
      // hàm trả về một số dương, đặt b trước a. Kết quả khi chạy đoạn code này sẽ là mảng 
      // sapxep được sắp xếp theo thứ tự tăng dần từ trái sang phải: [1, 2, 2, 3, 3, 4, 5].
  
// Phuong thức Map();

    const listNumber = [1,2,9,5,6,10];

    // Tra ve 1 mang ma moi items duoc double gia tri len

    const listNumberDouble = listNumber.map(function(value,index,array){
      // => trả ve so mu 2 
      // return Math.pow(value,2)
        return value *2 
        // => tra ve value x 2
    });
    console.log(listNumberDouble);

    // Hay cho biet su khac nhau trong foreach

    const listnumberTripble = listNumber.forEach((value,index,array)=> {
      return value * 3;
    })
    console.log(listnumberTripble);
    // Hay cho biet su khac nhau trong foreach (Quan trong)

    // Fillter() -> sang loc cac phan tu trong mang thoa dieu kien nao do
    
    const fillTer = listNumber.filter((value,index,arr) => {
        return value >4;
    })
  //   const fillTer = listNumber.filter((value,index,arr) => return value >4;)
    // console.log(listNumber);
    console.log(fillTer);





// Output: { name: "John", age: 30, city: "New York" }

    