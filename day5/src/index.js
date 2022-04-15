function ResizeWidth() {
  if (window.innerWidth < 500) {
    document.body.classList.add("bg-color-sm");
    document.body.classList.remove("bg-color-md");
    document.body.classList.remove("bg-color-lg");
  } else if (window.innerWidth < 800) {
    document.body.classList.remove("bg-color-sm");
    document.body.classList.add("bg-color-md");
    document.body.classList.remove("bg-color-lg");
  } else {
    document.body.classList.remove("bg-color-sm");
    document.body.classList.remove("bg-color-md");
    document.body.classList.add("bg-color-lg");
  }
}

ResizeWidth();
window.addEventListener("resize", ResizeWidth);
