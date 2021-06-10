// gerates a img button, which gives a modal with the audio
// WARNING! Make sure the variable name doesn't have spaces, because it will be the actual HTML class
function make_audio_img_modal(img_file_name, audio_file_name, name) {
  // append to img parent div
  var img_parent = document.getElementById("display-img-parent");
  img_parent.innerHTML += `<img src="${img_file_name}" alt="${name}" class="display-img" onclick="document.getElementsByClassName('modal-link')[${
    document.getElementsByClassName("modal-link").length
  }].click();">`;

  // append to modal link div
  var modal_link = document.getElementById("modal-links");
  modal_link.innerHTML += `<p><a class="modal-link" href="#${name}-modal" rel="modal:open"></a></p>`;

  // make the audio element
  var audio_div = document.createElement("DIV");
  audio_div.id = `${name}-modal`;
  audio_div.className = "modal";

  var audio_p = audio_div.appendChild(document.createElement("P"));
  audio_p.style = "text-align: center;";

  var audio_element = audio_p.appendChild(document.createElement("AUDIO"));
  audio_element.className = "audio";
  audio_element.setAttribute("src", audio_file_name);
  audio_element.setAttribute("controls", "controls");

  audio_div.appendChild(audio_p);
  audio_p.appendChild(audio_element);

  document.getElementById("modals").appendChild(audio_div);

  // back to the top
  window.scrollTo(0, 0);
}

var pieces = [
  [
    "../img/display-img/beethoven-moonlight.jpg",
    "../audio/beethoven-moonlight-audio.mp3",
    "beethoven-moonlight",
  ],
  [
    "../img/display-img/beethoven-pathetique.jpg",
    "../audio/beethoven-pathetique-audio.mp3",
    "beethoven-pathetique",
  ],
  [
    "../img/display-img/beethoven-tempest.jpg",
    "../audio/beethoven-tempest-audio.mp3",
    "beethoven-tempest",
  ],
  [
    "../img/display-img/mozart-k488.jpg",
    "../audio/mozart-k488-audio.mp3",
    "mozart-k488",
  ],
  [
    "../img/display-img/mozart-no16.jpg",
    "../audio/mozart-no16-audio.mp3",
    "mozart-no16",
  ],
  [
    "../img/display-img/mozart-turkish.jpg",
    "../audio/mozart-turkish-audio.mp3",
    "mozart-turkish",
  ],
  [
    "../img/display-img/beethoven-fur-elise.jpg",
    "../audio/beethoven-fur-elise-audio.mp3",
    "beethoven-fur-elise",
  ],
  [
    "../img/display-img/tchaikovsky-sugar.jpg",
    "../audio/tchaikovsky-sugar-audio.mp3",
    "tchaikovsky-sugar",
  ],
  [
    "../img/display-img/tchaikovsky-russian.jpg",
    "../audio/tchaikovsky-russian-audio.mp3",
    "tchaikovsky-russian",
  ],
  [
    "../img/display-img/tchaikovsky-flowers.jpg",
    "../audio/tchaikovsky-flowers-audio.mp3",
    "tchaikovsky-flowers",
  ],
  [
    "../img/display-img/chopin-ballade-1.jpg",
    "../audio/chopin-ballade-1-audio.mp3",
    "chopin-ballade-1",
  ],
  [
    "../img/display-img/chopin-ballade-2.jpg",
    "../audio/chopin-ballade-2-audio.mp3",
    "chopin-ballade-2",
  ],
  [
    "../img/display-img/chopin-ballade-3.jpg",
    "../audio/chopin-ballade-3-audio.mp3",
    "chopin-ballade-3",
  ],
  [
    "../img/display-img/chopin-ballade-4.jpg",
    "../audio/chopin-ballade-4-audio.mp3",
    "chopin-ballade-4",
  ],
  [
    "../img/display-img/ravel-bolero.jpg",
    "../audio/ravel-bolero-audio.mp3",
    "ravel-bolero",
  ],
  [
    "../img/display-img/vivaldi-season-spring.jpg",
    "../audio/vivaldi-season-spring-audio.mp3",
    "vivaldi-season-spring",
  ],
  [
    "../img/display-img/vivaldi-season-summer.jpg",
    "../audio/vivaldi-season-summer-audio.mp3",
    "vivaldi-season-summer",
  ],
  [
    "../img/display-img/vivaldi-season-autumn.jpg",
    "../audio/vivaldi-season-autumn-audio.mp3",
    "vivaldi-season-autumn",
  ],
  [
    "../img/display-img/vivaldi-season-winter.jpg",
    "../audio/vivaldi-season-winter-audio.mp3",
    "vivaldi-season-winter",
  ],
  [
    "../img/display-img/khachaturian-sabre.jpg",
    "../audio/khachaturian-sabre-audio.mp3",
    "khachaturian-sabre",
  ],
  [
    "../img/display-img/rossini-overture.jpg",
    "../audio/rossini-overture-audio.mp3",
    "rossini-overture",
  ],
  [
    "../img/display-img/korsakov-bumblebee.jpg",
    "../audio/korsakov-bumblebee-audio.mp3",
    "korsakov-bumblebee",
  ],
  [
    "../img/display-img/debussy-clare-de-lune.jpg",
    "../audio/debussy-clare-de-lune-audio.mp3",
    "debussy-clare-de-lune",
  ],
  [
    "../img/display-img/chopin-impromptu.jpg",
    "../audio/chopin-impromptu-audio.mp3",
    "chopin-impromptu",
  ],
  [
    "../img/display-img/chopin-polonaise-op53.jpg",
    "../audio/chopin-polonaise-op53-audio.mp3",
    "chopin-polonaise-op53",
  ],
  [
    "../img/display-img/chopin-scherzo-2.jpg",
    "../audio/chopin-scherzo-2-audio.mp3",
    "chopin-scherzo-2",
  ],
  [
    "../img/display-img/chopin-etude-4.jpg",
    "../audio/chopin-etude-4-audio.mp3",
    "chopin-etude-4",
  ],
  [
    "../img/display-img/chopin-etude-5.jpg",
    "../audio/chopin-etude-5-audio.mp3",
    "chopin-etude-5",
  ],
  [
    "../img/display-img/chopin-etude-12.jpg",
    "../audio/chopin-etude-12-audio.mp3",
    "chopin-etude-12",
  ],
  [
    "../img/display-img/debussy-west-wind.jpg",
    "../audio/debussy-west-wind-audio.mp3",
    "debussy-west-wind",
  ],
];

function go_to_composer(composer_name) {
  window.location.href = `/listen-to-music/${composer_name}`;
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

window.onload = function () {
  // display img border
  document.querySelectorAll(".display-img").forEach((el) => {
    el.style.border = `7px solid ${hexToRGBA(
      localStorage.getItem("theme-color"),
      0.75
    )}`;
    console.log("f");
  });
  console.log(document.querySelectorAll(".display-img"));
};

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
