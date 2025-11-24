import { Input } from "/components/input/input.js";
import { Button } from "/components/button/button.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#signup-form-container");
  const tabs = document.querySelectorAll(".tab-buttons button");

  function loadForm(type) {
    container.innerHTML = "";

    const form = document.createElement("form");
    form.id = `${type}-form`;

    // SIGNUP FORM
    if (type === "signup") {
      form.appendChild(Input("Full Name*", "text", "fullname", "user"));
      form.appendChild(Input("Email Address*", "email", "email", "email"));

      // PASSWORD FIELD + HINT
      const passwordGroup = Input("Password*", "password", "password", "lock");

      const wrapper = passwordGroup.querySelector(".input-wrapper");

      const passHint = document.createElement("span");
      passHint.className = "pass-hint";
      passHint.textContent = "Password must be at least 6 characters long";

      wrapper.insertAdjacentElement("afterend", passHint);

      form.appendChild(passwordGroup);

      // form.appendChild(
      //   Input("Confirm Password*", "password", "confirm", "lock")
      // );

      const createBtn = Button("Create Account", "primary");
      createBtn.type = "submit";
      form.appendChild(createBtn);
    }

    // LOGIN FORM
    if (type === "login") {
      form.appendChild(Input("Email Address*", "email", "email", "email"));
      form.appendChild(Input("Password*", "password", "password", "lock"));

      const loginBtn = Button("Login", "primary");
      loginBtn.type = "submit";

      form.appendChild(loginBtn);
    }

    container.appendChild(form);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const type = tab.dataset.tab;
      loadForm(type);
    });
  });

  loadForm("signup");
});

// SIGNUP HANDLER
// -----------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullname = document.querySelector("#fullname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const confirm = document.querySelector("#confirm").value.trim();

  if (!fullname || !email || !password || !confirm) {
    alert("All fields are required.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  // Check if user exists
  if (getUser(email)) {
    alert("Account with this email already exists.");
    return;
  }

  // Save new user
  saveUser({
    fullname,
    email,
    password,
  });

  alert("Account created! Redirecting to login...");
  window.location.href = "/modules/login/login.html";
});

if (type === "login") {
  // handled inside login.js, not this file
}

container.appendChild(form);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const type = tab.dataset.tab;
    loadForm(type);
  });
});

loadForm("signup");
