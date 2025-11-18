import signupFormHTML from "../components/input/input.html" assert { type: "text" };
import buttonHTML from "../components/buttons/button.html" assert { type: "text" };

const formContainer = document.getElementById("formContainer");

const signupFields = [
  {
    id: "fullname",
    label: "Full Name*",
    type: "text",
    placeholder: "John Doe",
    icon: "/assets/icons/User icon.svg",
    note: "",
  },
  {
    id: "email",
    label: "Email*",
    type: "email",
    placeholder: "hello@example.com",
    icon: "/assets/icons/email icon.svg",
    note: "",
  },
  {
    id: "password",
    label: "Password*",
    type: "password",
    placeholder: "......",
    icon: "/assets/icons/email icon.svg",
    note: "Password must be at least 6 characters long",
  },
];

function renderForm(fields) {
  formContainer.innerHTML = "";

  fields.forEach((f) => {
    const inputHTML = signupFormHTML
      .replace(/{id}/g, f.id)
      .replace(/{label}/g, f.label)
      .replace(/{type}/g, f.type)
      .replace(/{placeholder}/g, f.placeholder)
      .replace(/{icon}/g, f.icon)
      .replace(/{note}/g, f.note);

    formContainer.insertAdjacentHTML("beforeend", inputHTML);
  });

  formContainer.insertAdjacentHTML("beforeend", buttonHTML);
}

renderForm(signupFields);

document.getElementById("loginTab").addEventListener("click", () => {
  formContainer.innerHTML = "";
});

document.getElementById("signupTab").addEventListener("click", () => {
  renderForm(signupFields);
});
