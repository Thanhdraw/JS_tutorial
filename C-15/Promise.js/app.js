/*
    - status: pending
    - status: resolve
    - status: reject

*/
// new  Promise(function(resolve,reject))

let buyIphone = true;

// let willBuyIphone = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (buyIphone) {
//       resolve("I have new iPhone");
//       console.log("OK!");
//     } else {
//       reject("I don't have new iPhone :((");
//       console.log("not OK");
//     }
//   }, 5000);
// });
// console.log(willBuyIphone);

// .then(onFullfilled, onRejected);
// function makePromise(buyIphone) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (buyIphone) {
//         resolve("I have new iPhone");
//         // console.log("OK!");
//       } else {
//         reject("I don't have new iPhone :((");
//         // console.log("not OK");
//       }
//     }, 3000);
//   });
// }

// onFullfilled -> resolve
// let haveiPhone = makePromise(false);
// haveiPhone
//   .then(
//     (success) => console.log(success),
//     (reason) => console.log(reason)
//   )
//   .catch((error) => {
//     console.log(error);
//   })

//   .finally(() => {
//     console.log("i'm still happy");
//   });

// catch - finally

// ================================================
// setTimeout(() => {
//   console.log("run the first time");
//   setTimeout(() => {
//     console.log("run the secondtime");
//     setTimeout(() => {
//       console.log("run the third time");
//     }, 1000);
//   }, 1000);
// }, 3000);

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("1.run the first time");
//   }, 3000);
// })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("2. run the second time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("3. run the third time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });

function makerTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, 1000);
  });
}

const timer1 = makerTimer(1000, "1.first-time");
const timer2 = makerTimer(2000, "2.second-time");
const timer3 = makerTimer(3000, "3.third-time");

// const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
//   console.log(data);
// });
// console.log(timerTotal);

// const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
//   console.log(data);
// });

// Promise.allSettled

function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("you are not developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}

const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1,dev2]).then(data=>{
//   console.log(data);
// })

const devRace = Promise.allSettled([dev1, dev2]).then((data) => {
  console.log(data);
});

try {
  isFrontendDev2(["css"])
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
} catch (error) {
  console.log("oh nooooo");
}
