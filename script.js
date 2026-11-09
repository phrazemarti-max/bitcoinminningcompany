function showLogin() {
  document.getElementById("loginBox").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginBox").style.display = "none";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("username").value;

  closeLogin();

  document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
  });

  document.querySelector(".dashboard h2").textContent =
    "Welcome, " + name;

  alert("Demo dashboard opened. No real account was created.");
});

function demoAction(action) {
  document.getElementById("message").textContent =
    action + " is a demo preview only. No money will be transferred.";
}

function logout() {
  document.querySelector(".dashboard h2").textContent =
    "Customer Dashboard";

  document.getElementById("message").textContent =
    "You have left the demo dashboard.";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}