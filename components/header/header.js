document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header/header.html")
    .then((res) => res.text())
    .then((html) => {
      const placeholder = document.querySelector("#header-placeholder");
      placeholder.innerHTML = html;

      const headerTitle = document.querySelector(".header-title");
      const headerSubtitle = document.querySelector(".header-subtitle");

      if (headerTitle && headerSubtitle) {
        if (window.pageType === "login") {
          headerTitle.textContent = "Welcome Back";
          headerSubtitle.textContent =
            "Enter your details to access your account";
        }

        if (window.pageType === "signup") {
          headerTitle.textContent = "Join TaskMaster";
          headerSubtitle.textContent =
            "Create an account to boost your productivity";
        }
      }
    })
    .catch((err) => console.error("Header load error:", err));
});
