document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-dark");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
// Form validation
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill out all fields!";
    } else if (!email.includes("@") || !email.includes(".")) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email address.";
    } else {
      formMessage.style.color = "green";
      formMessage.textContent = "Thank you! Your message has been sent.";
      form.reset(); // clear the form
    }
  });

