// // gerates a img button, which gives a modal with the audio
// // WARNING! Make sure the variable name doesn't have spaces, because it will be the actual HTML class
// function make_audio_img_modal(img_file_name, audio_file_name, name) {
//   // append to img parent div
//   var img_parent = document.getElementById("display-img-parent");
//   img_parent.innerHTML += `<img src="${img_file_name}" alt="${name}" class="display-img" onclick="document.getElementsByClassName('modal-link')[${
//     document.getElementsByClassName("modal-link").length
//   }].click();">`;

//   // append to modal link div
//   var modal_link = document.getElementById("modal-links");
//   modal_link.innerHTML += `<p><a class="modal-link" href="#${name}-modal" rel="modal:open"></a></p>`;

//   // make the audio element
//   var audio_div = document.createElement("DIV");
//   audio_div.id = `${name}-modal`;
//   audio_div.className = "modal";

//   var audio_p = audio_div.appendChild(document.createElement("P"));
//   audio_p.style = "text-align: center;";

//   var audio_element = audio_p.appendChild(document.createElement("AUDIO"));
//   audio_element.className = "audio";
//   audio_element.setAttribute("src", audio_file_name);
//   audio_element.setAttribute("controls", "controls");

//   audio_div.appendChild(audio_p);
//   audio_p.appendChild(audio_element);

//   document.getElementById("modals").appendChild(audio_div);

//   // stop all sounds when X is clicked
//   document
//     .getElementById(`${name}-modal`)
//     .addEventListener("click", function (e) {
//       var sounds = document.getElementsByTagName("audio");
//       for (i = 0; i < sounds.length; i++) sounds[i].pause();
//     });

//   // stop all sounds when any place other than the modal is clicked
//   setInterval(function () {
//     if (document.getElementsByClassName("jquery-modal").length == 0) {
//       var sounds = document.getElementsByTagName("audio");
//       for (i = 0; i < sounds.length; i++) sounds[i].pause();
//     }
//   }, 10);

//   // back to the top
//   window.scrollTo(0, 0);
// }

// var pieces = [
//   [
//     "../../img/display-img/beethoven-moonlight.jpg",
//     "../../audio/beethoven-moonlight-audio.mp3",
//     "beethoven-moonlight",
//   ],
//   [
//     "../../img/display-img/beethoven-pathetique.jpg",
//     "../../audio/beethoven-pathetique-audio.mp3",
//     "beethoven-pathetique",
//   ],
//   [
//     "../../img/display-img/beethoven-tempest.jpg",
//     "../../audio/beethoven-tempest-audio.mp3",
//     "beethoven-tempest",
//   ],
//   [
//     "../../img/display-img/beethoven-fur-elise.jpg",
//     "../../audio/beethoven-fur-elise-audio.mp3",
//     "beethoven-fur-elise",
//   ],
//   [
//     "../../img/display-img/beethoven-waldstein.jpg",
//     "../../audio/beethoven-waldstein-audio.mp3",
//     "beethoven-waldstein",
//   ],
// ];

// function go_to_composer(composer_name) {
//   window.location.href = `/listen-to-music/${composer_name}`;
// }

// // make display image and audio modal
// window.onload = function () {
//   var num_img = pieces.length;
//   console.log(num_img);
//   var num_list = [...Array(num_img).keys()]; // 0, 1, ... pieces.length

//   for (i = 0; i < num_list.length; i++) {
//     parameters = pieces[num_list[i]];
//     console.log(parameters);
//     make_audio_img_modal(parameters[0], parameters[1], parameters[2]);
//   }
// };

// makes audio modal
function mke_audio_modal(
  img_file_name,
  composer_img_file_name,
  audio_file_name,
  name,
  piece_title_text
) {
  // img
  var img_parent = document.getElementById("display-img-parent");
  img_parent.innerHTML += `<img src="${img_file_name}" alt="${name}" class="display-img" onclick="document.getElementsByClassName('modal-link')[${
    document.getElementsByClassName("modal-link").length
  }].click();">`;

  // link
  var modal_link = document.getElementById("modal-links");
  modal_link.innerHTML += `<p><a class="modal-link" href="#${name}-modal" rel="modal:open"></a></p>`;

  // element
  var audio_div = document.createElement("DIV");
  audio_div.id = `${name}-modal`;
  audio_div.className = "modal";
  document.body.appendChild(audio_div);

  // meats & potatos of the modal
  document.getElementById(`${name}-modal`).innerHTML += `
    <div class="music-head-container">
    <div class="music-container" id="${name}">
    <div class="music-info">
      <h4 id="piece_title-${name}"></h4>
      <div class="progress-container" id="progress-container-${name}">
        <div class="progress" id="progress-${name}"></div>
      </div>
    </div>
  
    <audio src="${audio_file_name}" id="audio-${name}"></audio>
  
    <div class="img-container">
      <img src="${composer_img_file_name}" alt="music-cover" id="cover-${name}" />
    </div>
    <div class="navigation">
      <button id="prev-${name}" class="action-btn">
        <i class="fas fa-backward"></i>
      </button>
      <button id="play-${name}" class="action-btn action-btn-big">
        <i class="fas fa-play"></i>
      </button>
      <button id="next-${name}" class="action-btn">
        <i class="fas fa-forward"></i>
      </button>
    </div>
  </div>
  </div>`;

  // stop all sounds when X is clicked
  setInterval(function () {
    if (document.getElementsByClassName("close-modal").length != 0) {
      for (
        i = 0;
        i < document.getElementsByClassName("close-modal").length;
        i++
      ) {
        document
          .getElementsByClassName("close-modal")
          [i].addEventListener("click", function () {
            const audio = document.getElementById(`audio-${name}`);
            const playBtn = document.getElementById(`play-${name}`);
            const musicContainer = document.getElementById(name);

            musicContainer.classList.remove("play");
            playBtn.querySelector("i.fas").classList.add("fa-play");
            playBtn.querySelector("i.fas").classList.remove("fa-pause");

            audio.pause();
          });
      }
    }
  }, 100);

  // stop all sounds when any place other than the modal is clicked
  setInterval(function () {
    if (document.getElementsByClassName("jquery-modal").length == 0) {
      // no modal is open, so pause all sounds
      var sounds = document.getElementsByTagName("audio");
      for (i = 0; i < sounds.length; i++) {
        const audio = document.getElementById(`audio-${name}`);
        const playBtn = document.getElementById(`play-${name}`);
        const musicContainer = document.getElementById(name);

        musicContainer.classList.remove("play");
        playBtn.querySelector("i.fas").classList.add("fa-play");
        playBtn.querySelector("i.fas").classList.remove("fa-pause");

        audio.pause();
      }
    }
  }, 100);

  // back to the top
  window.scrollTo(0, 0);

  const musicContainer = document.getElementById(name);
  const playBtn = document.getElementById(`play-${name}`);
  const prevBtn = document.getElementById(`prev-${name}`);
  const nextBtn = document.getElementById(`next-${name}`);

  const audio = document.getElementById(`audio-${name}`);
  const progress = document.getElementById(`progress-${name}`);
  const progressContainer = document.getElementById(
    `progress-container-${name}`
  );
  const piece_title = document.getElementById(`piece_title-${name}`);
  const cover = document.getElementById(`cover-${name}`);
  const currTime = document.querySelector("#currTime");
  const durTime = document.querySelector("#durTime");

  // Initially load song details into DOM
  loadSong(audio_file_name);

  // Update song details
  function loadSong(song) {
    piece_title.innerText = piece_title_text;
    audio.src = audio_file_name;
    cover.src = composer_img_file_name;
  }

  // Play song
  function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
  }

  // Pause song
  function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
  }

  // Previous song
  function back() {
    audio.currentTime -= 10;
  }

  // Next song
  function forward() {
    audio.currentTime += 10;
  }

  // Update progress bar
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  // Set progress bar
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  }

  //get duration & currentTime for Time of song
  function DurTime(e) {
    const { duration, currentTime } = e.srcElement;
    var sec;
    var sec_d;

    // define minutes currentTime
    let min = currentTime == null ? 0 : Math.floor(currentTime / 60);
    min = min < 10 ? "0" + min : min;

    // define seconds currentTime
    function get_sec(x) {
      if (Math.floor(x) >= 60) {
        for (var i = 1; i <= 60; i++) {
          if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
            sec = Math.floor(x) - 60 * i;
            sec = sec < 10 ? "0" + sec : sec;
          }
        }
      } else {
        sec = Math.floor(x);
        sec = sec < 10 ? "0" + sec : sec;
      }
    }

    get_sec(currentTime, sec);

    // define minutes duration
    let min_d = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
    min_d = min_d < 10 ? "0" + min_d : min_d;

    function get_sec_d(x) {
      if (Math.floor(x) >= 60) {
        for (var i = 1; i <= 60; i++) {
          if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
            sec_d = Math.floor(x) - 60 * i;
            sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
          }
        }
      } else {
        sec_d = isNaN(duration) === true ? "0" : Math.floor(x);
        sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
      }
    }

    // define seconds duration
    get_sec_d(duration);
  }

  // Event listeners
  playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  function end() {
    pauseSong();
  }

  // Change song
  prevBtn.addEventListener("click", back);
  nextBtn.addEventListener("click", forward);

  // Time/song update
  audio.addEventListener("timeupdate", updateProgress);

  // Click on progress bar
  progressContainer.addEventListener("click", setProgress);

  // On end
  audio.addEventListener("ended", end);

  // Time of song
  audio.addEventListener("timeupdate", DurTime);
}

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

var pieces = [
  [
    "../../img/display-img/beethoven-moonlight.jpg",
    "../../img/composer-img-no-name/beethoven.jpg",
    "../../audio/beethoven-moonlight-audio.mp3",
    "beethoven-moonlight",
    "Sonata Op. 27, No. 2 (Moonlight)",
  ],
  [
    "../../img/display-img/beethoven-pathetique.jpg",
    "../../img/composer-img-no-name/beethoven.jpg",
    "../../audio/beethoven-pathetique-audio.mp3",
    "beethoven-pathetique",
    "Sonata Op. 13, No. 8 (Pathetique)",
  ],
  [
    "../../img/display-img/beethoven-tempest.jpg",
    "../../img/composer-img-no-name/beethoven.jpg",
    "../../audio/beethoven-tempest-audio.mp3",
    "beethoven-tempest",
    "Sonata Op. 31, No. 2 (Tempest)",
  ],
  [
    "../../img/display-img/beethoven-fur-elise.jpg",
    "../../img/composer-img-no-name/beethoven.jpg",
    "../../audio/beethoven-fur-elise-audio.mp3",
    "beethoven-fur-elise",
    "Bagatelle No. 25 (Fur Elise)",
  ],
  [
    "../../img/display-img/beethoven-waldstein.jpg",
    "../../img/composer-img-no-name/beethoven.jpg",
    "../../audio/beethoven-waldstein-audio.mp3",
    "beethoven-waldstein",
    "Sonata Op. 53, No. 21 (Waldstein)",
  ],
];

// make display image and audio modal
window.onload = function () {
  var num_img = pieces.length;
  var num_list = [...Array(num_img).keys()]; // 0, 1, ... pieces.length

  for (i = 0; i < num_list.length; i++) {
    parameters = pieces[num_list[i]];

    mke_audio_modal(
      parameters[0],
      parameters[1],
      parameters[2],
      parameters[3],
      parameters[4]
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
