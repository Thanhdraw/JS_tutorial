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


