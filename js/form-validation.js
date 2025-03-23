// Form validation and submission handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    // Form validation
    function validateForm() {
      let isValid = true;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Reset previous error messages
      document.querySelectorAll(".error-message").forEach((el) => el.remove());

      // Validate name
      if (name === "") {
        displayError("name", "Please enter your name");
        isValid = false;
      }

      // Validate email
      if (email === "") {
        displayError("email", "Please enter your email");
        isValid = false;
      } else if (!isValidEmail(email)) {
        displayError("email", "Please enter a valid email address");
        isValid = false;
      }

      // Validate message
      if (message === "") {
        displayError("message", "Please enter your message");
        isValid = false;
      }

      return isValid;
    }

    // Helper function to display error messages
    function displayError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.style.color = "red";
      errorDiv.style.fontSize = "14px";
      errorDiv.style.marginTop = "5px";
      errorDiv.textContent = message;
      field.parentNode.appendChild(errorDiv);
      field.style.borderColor = "red";
    }

    // Helper function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Form submission handler for Netlify
    contactForm.addEventListener("submit", function (e) {
      if (!validateForm()) {
        e.preventDefault();
        return false;
      }

      // The recipient email is now added directly in the HTML form
      // We don't need to add it programmatically anymore

      // Netlify handles the actual form submission
      // The page will be redirected after submission

      // If you want to track the submission in the console
      console.log("Form submitted to Netlify");

      // Success will be handled by Netlify's redirect
    });
  }
});
