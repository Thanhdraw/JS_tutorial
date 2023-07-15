// 1. viết 1 function kiểm tra có phải là object hay khong

function isObject(value){
    if(typeof value === "object" && !Array.isArray(value) && value !==null){
        return true;
    }
    return false;
}

// console.log(isObject());

// bài 2: Viết 1 function trả về 1 mảng key và value
// Cach 1:
function objectToArray(obj){
    if(!isObject(obj)) return;
    // Cách 1:
        // return Object.entries(obj);
    // Cách 2:
        // const value = Object.keys(obj).map((key)=>[key,obj[key]]);
    // return value;
    // Cách 3:
        let result = [];
        for(let key in obj){
            // hasOwnPropety(key) -> Nếu obj chưa key thì trả về true , ng lai trả về false
            if(obj.hasOwnProperty(key)){
                result.push([key,obj[key]]);
            }
        }
    return result;

}
console.log(objectToArray({a:1, b:2}));


// Bài 3: withThout




// Bài 4: 


// Bài tập: Quản lý danh sách sinh viên

// Yêu cầu:

// Tạo một đối tượng Student với các thuộc tính sau:

// Tên (name): chuỗi
// Tuổi (age): số nguyên
// Điểm số (grade): số thực
// Tạo một phương thức cho đối tượng Student để hiển thị thông tin của sinh viên:

// Phương thức này sẽ in ra màn hình thông tin của sinh viên bao gồm tên, tuổi và điểm số.
// Tạo một đối tượng Classroom để quản lý danh sách sinh viên:

// Classroom sẽ có một thuộc tính là students (danh sách sinh viên), ban đầu là một mảng rỗng.
// Classroom sẽ có phương thức để thêm một sinh viên mới vào danh sách (thêm vào mảng students).
// Classroom sẽ có phương thức để hiển thị danh sách sinh viên.


// Định nghĩa đối tượng Student
function Student( name,age,grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
}
// Định nghĩa phương thức hiển thị thông tin sinh viên


// 


Student.prototype.displayInfo = function(){
    console.log("-Name: " + this.name);
    console.log("-Age: " + this.age);
    console.log("-Grade: " + this.grade);

}

// Hiển thị thông tin sinh viên
// user1.displayInfo();
// cau1: thay doi thong tin sinh vien:
Student.prototype.changeName = function(newName){
    this.name = newName;
}
var user1 = new Student ("Thành",20,9.0);
console.log("**Thông tin sinh viên trước khi thay đổi**");
user1.displayInfo();
//Thay đổi thông tin sinh viên
user1.changeName("quocthanh");
console.log("**Thông tin sinh viên sau khi thay đổi**");
user1.displayInfo();

// Thay doi tuoi sinh vien

Student.prototype.changeAge = function(newAge){
    this.age = newAge;
}
Student.prototype.changeGrade = function(newGrade) {
    this.grade = newGrade;
}
user1.changeAge(18)
console.log("**Thông tin sinh viên sau khi thay đổi**");
user1.displayInfo();

// Tạo class-room
function Classroom() {
    this.students = [];
  }
  
  // Phương thức thêm sinh viên vào danh sách
  Classroom.prototype.addStudent = function(student) {
    this.students.push(student);
  }
  
  // Phương thức xoá sinh viên khỏi danh sách
  Classroom.prototype.removeStudent = function(student) {
    var index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
      console.log("Đã xoá sinh viên khỏi danh sách.");
    } else {
      console.log("Sinh viên không tồn tại trong danh sách.");
    }
  }
  // Classroom.prototype.updateStudentInfo = function(student, newName, newAge, newGrade) {
  //   var index = this.students.indexOf(student);
  //   if (index > -1) {
  //     this.students[index].changeName(newName);
  //     this.students[index].changeAge(newAge);
  //     this.students[index].changeGrade(newGrade);
  //     console.log("Đã cập nhật thông tin của sinh viên.");
  //   } else {
  //     console.log("Sinh viên không tồn tại trong danh sách.");
  //   }
  // }

  // Tạo một đối tượng Classroom mới
var classroom = new Classroom();

// Tạo và thêm một số sinh viên vào danh sách

// var student1 = new Student("John", 20, 8.5);
// var student2 = new Student("Jane", 19, 7.8);
// classroom.addStudent(student1);
// classroom.addStudent(student2);
// classroom.updateStudentInfo(student2, "Jane Smith", 20, 9.2);
// classroom.students.forEach(function(student) {
//     student.displayInfo();
//     console.log("----------------------");
//   });
//   classroom.removeStudent(student1);
// classroom.updateStudentInfo(student2, "Jane Smith", 30, 9.2);
// // Hiển thị danh sách sinh viên sau khi cập nhật
// console.log("Danh sách sinh viên sau khi cập nhật:");
// classroom.students.forEach(function(student) {
//   student.displayInfo();
//   console.log("----------------------");
// });





class sinhVien {
    constructor(name,age,grade){
      this.name = name;
      this.age = age;
      this.grade = grade;
      // this.id = "";
    }
    displayInfo(){
      console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, ID: ${this.id}`);
    
    }
}
var sinhVien1 = new sinhVien("thành",20,10);
var sinhVien2 = new sinhVien("dangthanh",22,9);
// Đây là cách 1 đơn giản dể thêm thuộc tính:
  // sinhVien1.id = 123;

// Đây là cách 2 nâng cao để thêm thuộc tính:
Object.defineProperty(sinhVien1, "id", {
  value: 123,
  writable: true,
  enumerable: true,
  configurable: true
});
sinhVien1.displayInfo();
sinhVien.prototype.changeNameSV = function(newName){
  this.name = newName;
} 
sinhVien1.changeNameSV("Minh thảo");
console.log("***Sau khi cap nhật***");
sinhVien1.displayInfo();


sinhVien.prototype.deleteMethod = function(){
    delete this.age;
} 
sinhVien1.deleteMethod(20)
console.log("***Sau khi cap nhật***");
sinhVien1.displayInfo();
sinhVien2.displayInfo();