/* =========================
         Theme toggle
         ========================= */
const toggleSwitch = document.getElementById("toggleSwitch");
const label = document.getElementById("themeLabel");

toggleSwitch.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");
  label.textContent = document.body.classList.contains("lightmode")
    ? "Light"
    : "Dark";
});

/* =========================
         Slider logic
         ========================= */
const cards = {
  alpha: document.getElementById("card-alpha"),
  blur: document.getElementById("card-blur"),
  border: document.getElementById("card-border"),
};

document.querySelectorAll('input[type="range"]').forEach((slider) => {
  slider.addEventListener("input", (e) => {
    const type = e.target.dataset.target;
    const value = e.target.value;

    if (type === "alpha") {
      cards.alpha.style.setProperty("--glass-alpha", value);
    }
    if (type === "blur") {
      cards.blur.style.setProperty("--glass-blur", `${value}px`);
    }
    if (type === "border") {
      cards.border.style.setProperty("--glass-border", value);
    }
  });
});
