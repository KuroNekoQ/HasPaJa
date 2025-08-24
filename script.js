// Tombol scroll ke atas
const toTop = document.getElementById("toTop");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
