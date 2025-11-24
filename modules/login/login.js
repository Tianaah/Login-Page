import { Input } from "/components/input/input.js";
import { Button } from "/components/button/button.js";

document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.querySelector("#form-container");
  const tabs = document.querySelectorAll(".tabs-buttons button");

  // -----------------------
  // FUNCTION: Load a form
  // -----------------------
  function loadForm(type) {
    formContainer.innerHTML = ""; // clear old form

    const form = document.createElement("form");
    form.id = `${type}-form`;

    // LOGIN FORM
    if (type === "login") {
      form.appendChild(Input("Email Address*", "email", "email", "email"));
      form.appendChild(Input("Password*", "password", "password", "lock"));
    }

    // SIGNUP FORM
    if (type === "signup") {
      form.appendChild(Input("Full Name*", "text", "fullname", "user"));
      form.appendChild(Input("Email Address*", "email", "email", "email"));
      form.appendChild(Input("Password*", "password", "password", "lock"));
    }

    // ACTION BUTTONS
    const actions = document.createElement("div");
    actions.className = "login-actions";

    const helpBtn = Button("Help?", "secondary");
    helpBtn.type = "button";

    const nextBtn = Button(
      type === "login" ? "Next Step" : "Create Account",
      "primary"
    );
    nextBtn.type = "submit";

    actions.append(helpBtn, nextBtn);
    form.appendChild(actions);

    formContainer.appendChild(form);
  }

  // -----------------------
  // TAB CLICK HANDLING
  // -----------------------
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active from other tab
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Which form should show?
      const type = tab.dataset.tab; // "login" or "signup"
      loadForm(type);
    });
  });

  // -----------------------
  // DEFAULT: Load Login form
  // -----------------------
  loadForm("login");
});

// LOGIN HANDLER
// -----------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (!email || !password) {
    alert("All fields are required.");
    return;
  }

  const user = getUser(email);

  if (!user) {
    alert("No account found with this email.");
    return;
  }

  if (user.password !== password) {
    alert("Incorrect password.");
    return;
  }

  // Save login
  loginUser(email);

  alert("Login successful!");
  window.location.href = "/dashboard.html";
});

container.appendChild(form);
