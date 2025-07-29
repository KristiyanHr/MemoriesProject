document.addEventListener("DOMContentLoaded", () => {
  const yourPassword = "nostalgia"; 

  const passwordForm = document.getElementById("password-form");

  if (passwordForm) {
    passwordForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const passwordInput = document.getElementById("password-input");
      const errorMessage = document.getElementById("error-message");

      if (passwordInput.value === yourPassword) {
        window.location.href = "memories.html";
      } else {
        errorMessage.style.visibility = "visible";
        passwordInput.focus();
      }
    });
  }
});