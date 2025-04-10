// js/logout.js

document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
  });
  