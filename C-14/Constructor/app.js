function person(name) {
  this.name = name;
}

person.prototype.getName = function () {
  console.log(this.name);
};

const thanhDev = new person("QuocThanh");
thanhDev.getName();
// ====================================

function Student(id, name, age, mathScore, literatureScore) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.mathScore = mathScore;
  this.literatureScore = literatureScore;
}

Student.prototype = {
  calculateAverageScore: function () {
    return (this.mathScore + this.literatureScore) / 2;
  },
  displayInfo: function () {
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Math Score: ${this.mathScore}`);
    console.log(`Literature Score: ${this.literatureScore}`);
    console.log(`Average Score: ${this.calculateAverageScore()}`);
  },
};
const student1 = new Student("Alice", 20, "A123", 8.5, 7.8);
const student2 = new Student("Bob", 22, "B456", 9.2, 6.5);
student1.displayInfo();
console.log("------------------");
student2.displayInfo();
