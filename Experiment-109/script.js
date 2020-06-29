window.addEventListener("DOMContentLoaded", function () {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (event) {
      if (event.matches) {
        document.body.style.background = "black";
        document.body.style.transition = "all 1s";
      } else {
        document.body.style.background = "white";
        document.body.style.transition = "all 1s";
      }
    });
});
