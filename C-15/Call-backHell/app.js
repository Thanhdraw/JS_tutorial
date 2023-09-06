setTimeout(() => {
  console.log("run the first time");
  setTimeout(() => {
    console.log("run the secondtime");
    setTimeout(() => {
      console.log("run the third time");
    }, 1000);
  }, 1000);
}, 3000);
