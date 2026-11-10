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

document.querySelectorAll("[data-show]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    applyFilter(link.dataset.show);
    const panel = document.querySelector("#work");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", "#work");
    document.querySelectorAll(".project-card:not([hidden])").forEach((card) => {
      card.classList.remove("is-flash");
      void card.offsetWidth;
      card.classList.add("is-flash");
    });
    document.querySelector(`[data-filter="${link.dataset.show}"]`).focus({ preventScroll: true });
  });
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
