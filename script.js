const cursor = document.querySelector(".cursor-cat");
const surprise = document.querySelector("#surprise");
const surpriseBtn = document.querySelector("#surpriseBtn");
const closeBtn = document.querySelector("#closeBtn");

document.addEventListener("mousemove", (event) => {
  if (!cursor) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.addEventListener("click", (event) => {
  // Small sparkle trail for a polished interactive feel.
  for (let i = 0; i < 4; i++) {
    const dot = document.createElement("span");
    dot.className = "sparkle";
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    dot.style.setProperty("--dx", `${(Math.random() - 0.5) * 80}px`);
    dot.style.setProperty("--dy", `${(Math.random() - 0.5) * 80}px`);
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 850);
  }
});

surpriseBtn.addEventListener("click", () => {
  surprise.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  surprise.classList.remove("show");
});

surprise.addEventListener("click", (event) => {
  if (event.target === surprise) {
    surprise.classList.remove("show");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    surprise.classList.remove("show");
  }
});
