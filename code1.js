const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function updateDisplay() {
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
    dateElement.textContent = now.toLocaleDateString();
}

setInterval(updateDisplay, 1000);
function fullsccreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
    document.body.addEventListener("click", fullsccreen);
});
