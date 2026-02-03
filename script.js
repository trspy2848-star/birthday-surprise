let currentPage = 0;
const pages = document.querySelector(".pages");
const song = document.getElementById("song");

let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && currentPage < 2) {
    currentPage++;
    pages.style.transform = `translateX(-${currentPage * 100}vw)`;
    if (currentPage === 1) song.play();
  }
});

function celebrate() {
  document.getElementById("finalText").innerHTML =
    "🎉 Happy Birthday Manya 💖<br>With lots of love, smiles & celebrations 🪩✨";
  document.body.style.background = "#ffb6c1";
}
