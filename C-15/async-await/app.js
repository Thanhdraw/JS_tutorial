function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}

// function expression

async function run() {
  console.log("starting");
  await wait(2000);
  console.log("ending");
}
run();

const fn = async () => {};
const student = {
  fullname: async function () {},
  async calcAge() {},
  yearly: async () => {},
};
function makerTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, 1000);
  });
}

async function allTimer() {
  const timer1 = await makerTimer(1000, "1.first-time");
  const timer2 = await makerTimer(2000, "2.second-time");
  const timers = await Promise.all([timer1, timer2]);
  console.log(timers);
  //   console.log(timer1);
  //   console.log(timer2);

  //   const timer3 = makerTimer(3000, "3.third-time");
}
allTimer();

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

// async function go() {
//   try {
//     const dev1 = await isFrontendDev(["css"]);
//     console.log(dev1);
//   } catch (error) {
//     console.log(error);
//   }
// }
async function go() {
  const dev1 = await isFrontendDev(["css"]);
  console.log(dev1);
  return dev1;
}
// console.log(go());
go()
  .then()
  .catch((err) => console.log(err));
