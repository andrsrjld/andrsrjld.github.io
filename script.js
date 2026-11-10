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
