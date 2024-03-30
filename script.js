document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Mainform");
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checkInputs()) {
      showModel();
    }
  });

  name.addEventListener("input", () => {
    validateField(name, name.value.trim() !== "", "Name cannot be blank");
  });

  surname.addEventListener("input", () => {
    validateField(
      surname,
      surname.value.trim() !== "",
      "Surname cannot be blank"
    );
  });

  email.addEventListener("input", () => {
    validateField(email, isEmail(email.value.trim()), "Not a valid email");
  });

  password.addEventListener("input", () => {
    validateField(
      password,
      password.value.trim().length >= 8,
      "Password must be at least 8 characters"
    );
  });

  function checkInputs() {
    let isValue = true;
    validateField(name, name.value.trim() !== "", "Name cannot be blank");
    validateField(
      surname,
      surname.value.trim() !== "",
      "Surname cannot be blank"
    );
    validateField(email, isEmail(email.value.trim()), "Not a valid email");
    validateField(
      password,
      password.value.trim().length >= 8,
      "Password must be at least 8 characters"
    );
    document.querySelectorAll(".form-control").forEach((control) => {
      if (control.classList.contains("error")) {
        isValue = false;
      }
    });
    return isValue;
  }

  function validateField(input, condition, errorMessage) {
    if (condition) {
      setSuccess(input);
    } else {
      setError(input, errorMessage);
    }
  }

  function setError(input, message) {
    const formControl = input.parentElement;
    const icon = formControl.querySelector(".icon");
    formControl.className = "form-control error";
    icon.className = "icon fas fa-times-circle";
    input.placeholder = message;
  }

  function setSuccess(input) {
    const formControl = input.parentElement;
    const icon = formControl.querySelector(".icon");
    formControl.className = "form-control success";
    icon.className = "icon fas fa-check-circle";
  }

  function isEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }

  function showModel() {
    const modal = document.getElementById("successModel");
    modal.style.display = "block";
    const closeBtn = document.querySelector(".close-button");

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
});
