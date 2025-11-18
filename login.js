const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const cardHeading = document.getElementById("card-heading");
const cardSubtitle = document.getElementById("card-subtitle");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  loginForm.classList.add("active");
  signupForm.classList.remove("active");

  cardHeading.textContent = "Welcome Back!";
  cardSubtitle.textContent = "Enter your details to access your account";
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  signupForm.classList.add("active");
  loginForm.classList.remove("active");

  cardHeading.textContent = "Join TaskMaster";
  cardSubtitle.textContent = "Create an account to boost your productivity";
});
