// Day 17: 10/07/2023
const student = {
    id: 1911062578,
    Name: "Quoc Thanh",
    Major: "IT",
    DTime : "2019 -2023",
}
student.hello = function(){
    console.log("hello Name");
};
console.log(student);

// For in
for(key in student){

        console.log(`${key}: ${student[key]}`);
    
}
// Object.keys()

const key1=Object.keys(student);
// console.log(key1);
// console.log(key1.length);

// Object,entries

const enTries = Object.entries(student);
console.log(enTries);

// Object.freeze()

    // const car = {
    //     nameCar: "Mercedes"
    // }

    // const changeCar = car;
    // changeCar.nameCar = "Audi";
    // console.log(changeCar);

// Cach sao chep 1 Object
// const student = {
//     id: 1911062578,
//     Name: "Quoc Thanh",
//     Major: "IT",
//     DTime : "2019 -2023",
// }
const newStudent = {...student};
console.log(newStudent);
console.log(student);
// {id: 1911062578, Name: 'Quoc Thanh', Major: 'IT', DTime: '2019 -2023', hello: ƒ}

const newUser2 = Object.assign({},student);
console.log(newUser2);


const user = {
    idStudent: "123",
    nameStudent: "thanhdang",
    school: {
        nameSchool: "Hutech",
        room: {
            nameRoom: "IT"
        },
    },
};
console.log(user);
// console.log("///////ban sao thu 2 cua user")
// const user2 = Object.assign({},user);
// user2.nameStudent = "quocthanh";
// console.log(user2);
// console.log("///////ban sao thu 3 cua user")
// const user3 = Object.assign({},user);
// user3.school = "SPKT";
// console.log(user3);
console.log("///////user sao khui dung ...");
const newUser = {...user};
newUser.nameStudent = "quocthanh";
console.log(newUser);

// Object.assign()
console.log("///////user3 sao khi dung assign");
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.nameStudent="minhthao(trapgirl)"
newUser3.school.nameSchool = "SPKT";
console.log(newUser3);





// This keyword
const student2 = {
    id: 1911062578,
    Name: "Quoc Thanh",
    Major: "IT",
    DTime : "2019 -2023",
    hi: function(){
        console.log(`my name is ${this.Name}`);
    },
    fullName: {
        nameCon: "Dang Quoc Thanh"
    },
};
student2.hi();
// console.log(student2);
console.log(student2.fullName?.nameCon);






// Destructuring object
console.log("////Destructuring object");
function whatYourinfo({name,age,school}){
    console.log(name,age,school);
}
  whatYourinfo({
    age: 23,
    name : "thanhDev",
    school: "Hutech",
  });