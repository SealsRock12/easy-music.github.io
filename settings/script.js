// saves settings
function save_settings() {
  let theme_color = document.querySelector("#theme-color").value;
  localStorage.setItem("theme-color", theme_color);

  let font_family = document.querySelector("#font-option").value;
  let css_font_family;

  if (font_family == "fira-sans") {
    css_font_family = "'Fira Sans', sans-serif";
  } else if (font_family == "open-sans") {
    css_font_family = "'Open Sans', sans-serif";
  } else if (font_family == "oswald") {
    css_font_family = "'Oswald', sans-serif";
  } else if (font_family == "roboto-mono") {
    css_font_family = "'Roboto Mono', monospace";
  } else if (font_family == "montserrat") {
    css_font_family = "'Montserrat', sans-serif";
  } else if (font_family == "raleway") {
    css_font_family = "'Raleway', sans-serif";
  }

  localStorage.setItem("font-family-plain", font_family);
  localStorage.setItem("font-family-css", css_font_family);

  location.reload();
}

// resets all settings
function reset_settings() {
  confirmation = confirm("Are you sure you want to reset all settings?");

  if (confirmation) {
    localStorage.setItem("theme-color", "#00C8FF");
    location.reload();
  }
}

document.querySelector("#font-option").value =
  localStorage.getItem("font-family-plain");

if (localStorage.getItem("theme-color")) {
  // change value of color picker if theme-color in localStorage
  let theme_color = localStorage.getItem("theme-color");

  document.querySelector("#theme-color").value = theme_color;
} else {
  // default
  localStorage.setItem("theme-color", "#00C8FF");

  localStorage.setItem("font-family-css", "'Fira Sans', sans-serif");
  localStorage.setItem("font-family-plain", "fira-sans");

  // gui
  document.querySelector("#theme-color").value = "#00C8FF";
  document.querySelector("#font-option").value =
    localStorage.getItem("font-family-plain");
}

let theme_color = localStorage.getItem("theme-color");

document.querySelector("#save-button").style.backgroundColor = theme_color;
document.querySelector("#reset-button").style.backgroundColor = theme_color;
document.querySelector("#back-button").style.backgroundColor = theme_color;

// set font for font option menu
// custom font
document.querySelectorAll("*").forEach((el) => {
  if (!el.classList.contains("fas")) {
    el.style.fontFamily = localStorage.getItem("font-family-css");
    if (localStorage.getItem("font-family-plain") == "baloo-tammudu") {
      el.style.fontWeight = "100";
    }
  }
});

// style the specific font names as those fonts
document.querySelector("#fira-sans-label").style.fontFamily =
  "'Fira Sans', sans-serif";
document.querySelector("#open-sans-label").style.fontFamily =
  "'Open Sans', sans-serif";
document.querySelector("#oswald-label").style.fontFamily =
  "'Oswald', sans-serif";
document.querySelector("#roboto-mono-label").style.fontFamily =
  "'Roboto Mono', monospace";
document.querySelector("#montserrat-label").style.fontFamily =
  "'Montserrat', sans-serif";
document.querySelector("#raleway-label").style.fontFamily =
  "'Raleway', sans-serif";
