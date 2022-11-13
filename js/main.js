AOS.init({
  duration: 1200,
  once: false,
  easing: "ease-in-out-sine",
});

const TopBtn = document.querySelector(".moveTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    TopBtn.classList.add("on");
  } else {
    TopBtn.classList.remove("on");
  }
});

TopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
