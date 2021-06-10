// custom font
document.querySelectorAll("*").forEach((el) => {
  if (!el.classList.contains("fas")) {
    el.style.fontFamily = localStorage.getItem("font-family-css");
    if (localStorage.getItem("font-family-plain") == "baloo-tammudu") {
      el.style.fontWeight = "100";
    }
  }
});

// Your CSS as text
var styles = `
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Raleway:wght@200&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");
  `;

var styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
