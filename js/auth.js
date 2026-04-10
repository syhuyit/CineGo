const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  const aUser = "admin1";
  const aPassword = "123456";

  if (aUser == username && aPassword == password) {
    localStorage.setItem("user", username);
    alert("Đăng nhập thành công");
    window.location.href = (window.location.pathname.includes('/pages/') ? '' : 'pages/') + "home.html";
  } else {
    alert("Not found account");
  }
});

function logout() {
  localStorage.removeItem("user");
  window.location.href = (window.location.pathname.includes('/pages/') ? '../' : '') + "index.html";
}

// Attach logout to button if it exists
document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  // Auth Guard
  if (window.location.pathname.includes("/pages/")) {
    if (!localStorage.getItem("user")) {
      alert("Vui lòng đăng nhập trước!");
      window.location.href = "../index.html";
    }
  }
});
