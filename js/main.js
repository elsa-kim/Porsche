AOS.init({
  duration: 1200,
  once: false,
  easing: "ease-in-out-sine",
});

const TopBtn = document.querySelector(".moveTopBtn");
TopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
