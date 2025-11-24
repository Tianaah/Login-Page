export function Button(text, variant = "primary") {
  const btn = document.createElement("button");
  btn.className = `btn btn-${variant}`;
  btn.textContent = text;
  return btn;
}
