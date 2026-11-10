const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");
const count = document.querySelector("#project-count");

function applyFilter(filter) {
  let visible = 0;
  projects.forEach((project) => {
    const show = filter === "all" || project.dataset.category === filter;
    project.hidden = !show;
    if (show) visible += 1;
  });

  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });
  count.textContent = String(visible).padStart(2, "0");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

document.querySelector("#year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector(".theme-toggle");
function syncThemeLabel() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  syncThemeLabel();
});
syncThemeLabel();
