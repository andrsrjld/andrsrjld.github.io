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
