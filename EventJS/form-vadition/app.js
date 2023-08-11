const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;

  if (!username || !password) {
    alert("Please Fill the form");
  }
});
