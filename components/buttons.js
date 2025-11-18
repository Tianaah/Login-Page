const reUseButton = document.getElementById("sectionBtn");

const createButton = (options) => {
  const template = document.createElement("template");

  template.innerHTML = `
    
        <button class="button">
                
                <span id="help">${options.label}</span>
        </button>
   `;

  const button = template.content.firstElementChild;
  if (options.icon) {
    button.insertAdjacentHTML(
      "afterbegin",
      `
        <span class="fa-regular ${options.icon} fa-lg"></span>
        `
    );
  }
  return button;
};

const myButton = createButton({
  label: "help?",
  icon: "/Assets/icons/help icon.svg",
});

const newButton = createButton({
  label: "Create Account",
});

reUseButton.appendChild(myButton);

reUseButton.appendChild(newButton);
