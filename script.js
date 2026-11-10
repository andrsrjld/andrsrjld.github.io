const commandContent = {
  ship: {
    heading: "ship",
    body: "Deliver product surfaces end to end, without treating frontend, API, mobile, and deployment as separate conversations.",
    items: ["React and Next.js interfaces", "Go and Node service work", "Flutter mobile delivery", "Containers and release-ready environments"],
  },
  operate: {
    heading: "operate",
    body: "Build operating paths that teams can understand under pressure, with observable deployments and reversible change where possible.",
    items: ["CI/CD design and debugging", "Docker-based environments", "Linux and service operations", "Access and deployment guardrails"],
  },
  improve: {
    heading: "improve",
    body: "Reduce recurring uncertainty by making the critical path explicit, repeatable, and easier to hand over.",
    items: ["Automation of repeatable work", "Practical runbooks", "Release and migration checks", "Infrastructure inventories"],
  },
};

const output = document.querySelector("#terminal-output");
const commandText = document.querySelector("#command-text");
const buttons = document.querySelectorAll("[data-command]");

function renderCommand(command) {
  const content = commandContent[command];
  if (!content) return;

  commandText.textContent = content.heading;
  output.replaceChildren();
  const description = document.createElement("p");
  description.textContent = content.body;
  const list = document.createElement("ul");
  content.items.forEach((item) => {
    const entry = document.createElement("li");
    entry.textContent = item;
    list.append(entry);
  });
  output.append(description, list);

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.command === command));
  });
}

buttons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => renderCommand(button.dataset.command));
});

document.querySelector("#year").textContent = new Date().getFullYear();
