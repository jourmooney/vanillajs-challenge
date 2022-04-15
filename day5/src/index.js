const colors = ["#458dd5", "#8f4eae", "#eebc13"];

function ResizeWidth() {
  if (window.innerWidth < 500) {
    document.body.style.backgroundColor = colors[0];
  } else if (window.innerWidth < 800) {
    document.body.style.backgroundColor = colors[1];
  } else {
    document.body.style.backgroundColor = colors[2];
  }
}

document.querySelector("h1").style.color = "white";

ResizeWidth();
window.addEventListener("resize", ResizeWidth);
