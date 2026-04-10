const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  const aUser = "admin1";
  const aPassword = "123456";

  if (aUser == username && aPassword == password) {
    alert("Đăng nhập thành công");
    window.location.href = "pages/home.html";
  } else {
    alert("Not found account");
  }
});
