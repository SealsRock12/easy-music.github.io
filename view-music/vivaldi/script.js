// makes img button
function mke_score_img(img_file_name, score_url) {
  // img
  var img_parent = document.getElementById("display-img-parent");
  img_parent.innerHTML += `<img src="${img_file_name}" alt="${img_file_name}" class="display-img" onclick="window.open('${score_url}', '_blank').focus()">`;
}

function go_to_composer(composer_name) {
  window.location.href = `/listen-to-music/${composer_name}`;
}

var pieces = [
  [
    "../../img/display-img/vivaldi-season-spring.jpg",
    "../../sheet-music/vivaldi-season-spring-pdf.pdf",
  ],
  [
    "../../img/display-img/vivaldi-season-summer.jpg",
    "../../sheet-music/vivaldi-season-summer-pdf.pdf",
  ],
  [
    "../../img/display-img/vivaldi-season-autumn.jpg",
    "../../sheet-music/vivaldi-season-autumn-pdf.pdf",
  ],
  [
    "../../img/display-img/vivaldi-season-winter.jpg",
    "../../sheet-music/vivaldi-season-winter-pdf.pdf",
  ],
  // ["../../img/display-img/vivaldi-stravaganza.jpg", "../../sheet-music."],
  [
    "../../img/display-img/vivaldi-stabat.jpg",
    "../../sheet-music/vivaldi-stabat-pdf.pdf",
  ],
];

var num_img = pieces.length;
var num_list = [...Array(num_img).keys()]; // 0, 1, ... pieces.length

for (i = 0; i < num_list.length; i++) {
  parameters = pieces[num_list[i]];

  mke_score_img(parameters[0], parameters[1]);
}

function hexToRGBA(hex, opacity) {
  return (
    "rgba(" +
    (hex = hex.replace("#", ""))
      .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .concat(isFinite(opacity) ? opacity : 1)
      .join(",") +
    ")"
  );
}

// SETTINGS STUFF //
// display img border
document.querySelectorAll(".display-img").forEach((el) => {
  el.style.border = `7px solid ${hexToRGBA(
    localStorage.getItem("theme-color"),
    0.75
  )}`;
});

// music container
document.querySelectorAll(".music-container").forEach((el) => {
  el.style.boxShadow = `0 20px 20px 0 ${hexToRGBA(
    localStorage.getItem("theme-color"),
    0.4
  )}`;
});

// music info
document.querySelectorAll(".music-info").forEach((el) => {
  el.style.backgroundColor = `${hexToRGBA(
    localStorage.getItem("theme-color"),
    0.3
  )}`;
});

// progress
document.querySelectorAll(".progress").forEach((el) => {
  el.style.backgroundColor = `${hexToRGBA(
    localStorage.getItem("theme-color"),
    1
  )}`;
});

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
