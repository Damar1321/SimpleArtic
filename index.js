let strength = 9007199254740990;
const strengthEl = document.getElementById("strength");
const knightEl = document.getElementById("knight");

const idleImg = "https://raw.githubusercontent.com/Damar1321/SimpleArtic/refs/heads/main/docs/arcdat/tile000.png";
const clickImg1 = "https://raw.githubusercontent.com/Damar1321/SimpleArtic/refs/heads/main/docs/arcdat/tile001.png";
const clickImg2 = "https://raw.githubusercontent.com/Damar1321/SimpleArtic/refs/heads/main/docs/arcdat/tile002.png";
const clickImg3 = "https://raw.githubusercontent.com/Damar1321/SimpleArtic/refs/heads/main/docs/arcdat/tile003.png";
const clickImg4 = "https://raw.githubusercontent.com/Damar1321/SimpleArtic/refs/heads/main/docs/arcdat/tile004.png";
const clickImg5 = "https://raw.githubusercontent.com/Damar1321/SimpleArtic/refs/heads/main/docs/arcdat/tile005.png";

function pressKnight() {
  knightEl.src = clickImg1;
  setTimeout(function() { knightEl.src = clickImg2; }, 120);
  strength++;
  strengthEl.textContent = formatNumber(strength);
}

function formatNumber(num) {
    if (num >= 1_000_000_000_000_000_000) return (num / 1_000_000_000_000_000_000).toFixed(1) + "Qi";
    if (num >= 1_000_000_000_000_000) return (num / 1_000_000_000_000_000).toFixed(1) + "Qa";
    if (num >= 1_000_000_000_000) return (num / 1_000_000_000_000).toFixed(1) + "T";
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
}
function switchfor() {
    strengthEl.textContent = strength.toLocaleString("id-ID");
}

// Fungsi saat lepas tekan
function releaseKnight() {
  knightEl.src = idleImg;
}

// Event untuk laptop/PC
knightEl.addEventListener("mousedown", pressKnight);
knightEl.addEventListener("mouseup", releaseKnight);
knightEl.addEventListener("mouseleave", releaseKnight);

// Event untuk HP/layar sentuh
knightEl.addEventListener("touchstart", (e) => {
  e.preventDefault(); // mencegah delay klik di HP
  pressKnight();
});
knightEl.addEventListener("touchend", releaseKnight);
knightEl.addEventListener("touchcancel", releaseKnight);
