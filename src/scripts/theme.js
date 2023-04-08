const body = document.querySelector("html");
const toggle = document.getElementById("btn-moon-sun");
const icon = document.getElementById("dark-mode-icon");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "moon") {
    body.classList.add("moon");
    icon.classList.add("bx-sun");
    toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("moon");
    icon.classList.toggle("bx-sun");

    if (!body.classList.contains("moon")) {
        return localStorage.setItem("mode", "sun");
    }
    localStorage.setItem("mode", "moon");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));