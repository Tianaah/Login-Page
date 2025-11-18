const componentsToLoad = document.querySelectorAll("[data-import]");

async function loadComponents(elements) {
  for (let el of elements) {
    const url = el.getAttribute("data-import");

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Component not found");

      const html = await res.text();
      el.innerHTML = html;

      executeComponentScripts(el);

      const nestedComponents = el.querySelectorAll("[data-import]");
      await loadComponents(nestedComponents);
    } catch {
      el.innerHTML = `<h4>Component not found</h4>`;
    }
  }
}

loadComponents(componentsToLoad);

function executeComponentScripts(element) {
  const scripts = element.querySelectorAll("script");
  for (let script of scripts) {
    const newScript = document.createElement("script");
    if (script.src) newScript.src = script.src;
    if (script.textContent) newScript.textContent = script.textContent;
    script.remove();
    document.body.appendChild(newScript);
  }
}
