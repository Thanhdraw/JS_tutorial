// fetch("https://openweathermap.org/api")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Chuyển đổi dữ liệu JSON thành JavaScript object
//   })
//   .then((data) => {
//     console.log(data); // Xử lý dữ liệu
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const endPoint = "https://api.github.com/users/Thanhdraw";

// const promise = fetch(endPoint);

// promise
//   .then((response) => {
//     return response.json;
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.bio);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://api.github.com/users/Thanhdraw")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.bio);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
const endPoint = "https://api.github.com/users";
const userEL = document.querySelector(".username");

async function displayUser(username) {
  userEL.textContent = "Loading...";

  const promise = await fetch(`${endPoint}/${username}`);
  const data = await promise.json();
  userEL.textContent = `${data.login}`;
  console.log("displayUser ~ data", data);
  // promise
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     console.log(data.bio);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
displayUser("Thanhdraw");
