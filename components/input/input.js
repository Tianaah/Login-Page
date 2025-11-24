export function Input(labelText, type, id, iconClass) {
  const group = document.createElement("div");
  group.classList.add("input-group");

  group.innerHTML = `
    <label for="${id}">${labelText}</label>
    <div class="input-wrapper">
      
      <input type="${type}" id="${id}" class="input-${type}" required />
    </div>
  `;

  return group;
}
