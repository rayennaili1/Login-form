document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  
  form.addEventListener("submit", function(event) {
    if (username.value.trim() === "" || password.value.trim() === "") {
      event.preventDefault();
      alert("Both fields are required.");
    }
  });
});
