function generate_random_num(min, max) {
  // generates random int from range
  // both inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generate_num_list(low, high) {
  // generates random num list (no repeats) of 8 numbers
  var num_list = [];
  for (var i = 0; i < 8; i++) {
    var random_num = generate_random_num(low, high);
    if (num_list.includes(random_num) === false) {
      num_list.push(random_num);
    } else {
      while (num_list.includes(random_num)) {
        var random_num = generate_random_num(low, high);
        if (num_list.includes(random_num) === false) {
          num_list.push(random_num);
          break;
        }
      }
    }
  }

  return num_list;
}

function go_to_problem(problem_num) {
  document.getElementById(`problem-result-${problem_num}`).scrollIntoView({
    behavior: "smooth",
    block: "start",
    block: "center",
    inline: "center",
  });
}

function submit() {
  // check if all are filled out
  filled = new Array(8);

  for (index = 1; index < 9; index++) {
    check = document.getElementsByName(`option-${index}`);
    while (true) {
      filled[index - 1] = false;
      for (i = 0; i < check.length; i++) {
        if (check[i].checked) {
          filled[index - 1] = true;
        }
      }
      break;
    }
  }

  // warning
  if (!filled.every(Boolean)) {
    alert("You must fill out every problem!");
    return false;
  }

  // get value of each problem
  answer = new Array(8);

  for (index = 1; index < 9; index++) {
    check = document.getElementsByName(`option-${index}`);
    while (true) {
      answer[index - 1] = false;
      for (i = 0; i < check.length; i++) {
        if (check[i].checked) {
          answer[index - 1] = i + 1;
        }
      }
      break;
    }
  }

  console.log(answer);

  grade = [];

  // grade them!
  var request = new XMLHttpRequest();
  request.open("GET", "/music-quiz/problems.json", false);
  request.send(null);

  if (request.status === 200) {
    x = request.responseText;
    x = JSON.parse(x);
  }

  for (i = 0; i < 8; i++) {
    if (answer[i] == x[problem_order[i]][2]) {
      grade.push(true);
    } else {
      grade.push(false);
    }
  }

  console.log(grade);
  console.log(problem_order);

  // remove elements
  document.querySelectorAll(".problem").forEach((e) => e.remove());
  document.querySelectorAll(".problem-choice").forEach((e) => e.remove());
  document.querySelectorAll("#submit").forEach((e) => e.remove());

  // create the correct/wrong screen
  document.body.innerHTML += `<h1 id='results-h1'>Results</h1>`;
  document.body.innerHTML += `<h2 id='results-h2'>Your Score: ${
    grade.filter((x) => x == true).length
  }/8</h2>`;

  document.body.innerHTML += `
  <div id="sticky-parent">
    <div id="sticky">
      <ul>
        <li><button onclick="go_to_problem(1)" class="section-button">Problem 1</button>
        <li><button onclick="go_to_problem(2)" class="section-button">Problem 2</button>
        <li><button onclick="go_to_problem(3)" class="section-button">Problem 3</button>
        <li><button onclick="go_to_problem(4)" class="section-button">Problem 4</button>
        <li><button onclick="go_to_problem(5)" class="section-button">Problem 5</button>
        <li><button onclick="go_to_problem(6)" class="section-button">Problem 6</button>
        <li><button onclick="go_to_problem(7)" class="section-button">Problem 7</button>
        <li><button onclick="go_to_problem(8)" class="section-button">Problem 8</button>
    </div>
  </div>
  `;

  for (i = 0; i < 8; i++) {
    document.body.innerHTML += `<p class="problem-result" id="problem-result-${
      i + 1
    }">${x[problem_order[i]][0]}</p> <br>`;

    if (grade[i]) {
      // correct
      document.body.innerHTML += `<div id="result-${i + 1}">
      <div class="font-awesome-icon"><i class="fas fa-check"></i></div>
      <p class="check-heading">You answered "${
        x[problem_order[i]][1].split("|||")[x[problem_order[i]][2] - 1]
      }"
      </div>
      `;
    } else {
      // incorrect
      document.body.innerHTML += `<div id="result -${i + 1}">
      <div class="font-awesome-icon"><i class="fas fa-times"></i></div>
      <p class="times-heading">The answer was "${
        x[problem_order[i]][1].split("|||")[x[problem_order[i]][2] - 1]
      }"</p>
      <p class="times-heading">You answered "${
        x[problem_order[i]][1].split("|||")[answer[i] - 1]
      }"</p>
      </div>`;
    }
  }

  // scroll to the top
  scroll(0, 0);

  // interval for sticky
  let sticky = document.getElementById("sticky-parent");
  sticky.style.display = "none";

  setInterval(() => {
    // if (document.documentElement.scrollTop > 266) {
    //   sticky.style.display = "block";
    //   sticky.style.animation = "fade-in 1s";
    // } else {
    //   sticky.style.animation = "fade-out 1s";
    //   // sticky.style.display = "none";
    // }
    var y = $(this).scrollTop();
    if (y > 0) {
      $("#sticky-parent").fadeIn();
    } else {
      $("#sticky-parent").fadeOut();
    }
  }, 10);
}

// remove elements
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let start = document.querySelector("#start");

// style for start button
let theme_color = localStorage.getItem("theme-color");
document.querySelector("#start-button").style.backgroundColor = theme_color;

document.querySelector("#start-button").addEventListener("click", function () {
  title.remove();
  subtitle.remove();
  start.remove();

  var request = new XMLHttpRequest();
  request.open("GET", "/music-quiz/problems.json", false);
  request.send(null);

  if (request.status === 200) {
    values = request.responseText;
    values = JSON.parse(values);
  }

  problem_order = generate_num_list(1, Object.keys(values).length);

  // document.body.innerHTML += "<br>";

  for (var i = 0; i < 8; i++) {
    document.body.innerHTML += `<p class="problem">${
      values[problem_order[i]][0]
    }</p>`;

    document.body.innerHTML += `
      <div class="problem-choice">
        <input type="radio" id="option-1-${i + 1}"
        name="option-${i + 1}" value="mail-${i + 1}">
        <label for="option-1-${i + 1}">${
      values[problem_order[i]][1].split("|||")[0]
    }</label>
       
        <input type="radio" id="option-2-${i + 1}"
        name="option-${i + 1}" value="mail-${i + 1}">
        <label for="option-2-${i + 1}">${
      values[problem_order[i]][1].split("|||")[1]
    }</label>
      
        <input type="radio" id="option-3-${i + 1}"
        name="option-${i + 1}" value="mail-${i + 1}">
        <label for="option-3-${i + 1}">${
      values[problem_order[i]][1].split("|||")[2]
    }</label>
      
        <input type="radio" id="option-4-${i + 1}"
        name="option-${i + 1}" value="mail-${i + 1}">
        <label for="option-4-${i + 1}">${
      values[problem_order[i]][1].split("|||")[3]
    }</label>
              </div>`;
  }

  document.body.innerHTML += `<div id="submit"><button id="submit-button" onclick="submit()">SUBMIT</button></div>`;
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
