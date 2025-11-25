// Generic component loader
async function loadTemplate(targetSelector, filePath) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const res = await fetch(filePath);
  const html = await res.text();

  const temp = document.createElement("div");
  temp.innerHTML = html;

  const template = temp.querySelector("template");
  if (!template) throw new Error(`Template not found in ${filePath}`);

  target.appendChild(template.content.cloneNode(true));
}

// Load all dashboard components
Promise.all([
  loadTemplate("#sidebar", "/templates/sidebar.html"),
  loadTemplate("#header", "/templates/header.html"),
  loadTemplate("#stats", "/templates/statsCard.html"),
  loadTemplate("#recent-tasks", "/templates/recentTasks.html"),
  loadTemplate("#quick-actions", "/templates/quickActions.html"),
]).then(() => {
  renderStatsCards();
});

// CARD DATA (dynamic)
const statsData = [
  { title: "Active Tasks", value: "0", description: "0 completed" },
  { title: "Total Expenses", value: "$0.00", description: "This period" },
  { title: "Total Notes", value: "0", description: "Saved notes" },
  { title: "Completion Rate", value: "0%", description: "Task completion" },
];

// RENDER STATS CARDS
function renderStatsCards() {
  const container = document.querySelector(".stats-grid");
  const template = document.getElementById("stats-card-template");

  statsData.forEach((stat) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".card-title").textContent = stat.title;
    clone.querySelector(".card-value").textContent = stat.value;
    clone.querySelector(".card-description").textContent = stat.description;

    container.appendChild(clone);
  });
}
const user = JSON.parse(localStorage.getItem("user"));

document.querySelector(".user-info h4").textContent = user.name;
document.querySelector(".user-info small").textContent = user.email;

document.querySelector(
  ".page-header h1"
).textContent = `Good evening, ${user.name}!`;
