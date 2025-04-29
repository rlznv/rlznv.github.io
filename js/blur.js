document.addEventListener("DOMContentLoaded", () => {
  const blurWordArray = document.querySelectorAll(".blur-word");
  blurWordArray.forEach(element => {
    element.addEventListener("click", () => {
      element.classList.toggle("unblur-word");
    });
  });
});