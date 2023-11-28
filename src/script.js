const leftColor = document.querySelector(".left_color_title");
const right = document.querySelector(".right_color");
const yesBtn = document.querySelector(".btn_yes");
const noBtn = document.querySelector(".btn_no");
const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start_btn");

let valueTimer = 60;
let timerId;
let resultLevel;
const nameColorArr = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Brown", hex: "#A52A2A" },
];
const colorArr = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#A52A2A",
];

const totalResults = {
  true: 0,
  false: 0,
};

function updateTimer() {
  //   console.log(valueTimer);

  valueTimer--;
  timer.innerHTML = valueTimer;
  if (valueTimer <= 0) {
    clearInterval(timerId);
    console.log("Час вийшов!");
    startBtn.style.display = "block";
    document.querySelector(".control_container").style.display = "none";
    document.querySelector(".color_container").style.display = "none";
    document.querySelector(".result_container").style.display = "flex";

    document.querySelector(
      ".true_result"
    ).innerHTML = `Corectly:${totalResults.true}`;

    document.querySelector(
      ".false_result"
    ).innerHTML = `Incorectly:${totalResults.false}`;

    valueTimer = 60;
  }
}

const changeColor = () => {
  const getRandomId = () => {
    const id = Math.abs(Math.floor(Math.random() * nameColorArr.length - 1));

    return id;
  };
  const leftId = getRandomId();
  const rightId = getRandomId();

  leftColor.innerHTML = nameColorArr[leftId].name;
  leftColor.style.color = `${nameColorArr[getRandomId()].hex}`;

  right.style.color = `${nameColorArr[rightId].hex}`;
  right.innerHTML = nameColorArr[getRandomId()].name;

  const result = leftId === rightId ? true : false;
  resultLevel = result;
};

startBtn.addEventListener("click", () => {
  changeColor();
  timer.innerHTML = "60";
  timer.style.display = "block";
  document.querySelector(".control_container").style.display = "flex";
  document.querySelector(".color_container").style.display = "flex";
  startBtn.style.display = "none";
  document.querySelector(".result_container").style.display = "none";

  startBtn.innerHTML = "Rety";
  // reset totalResult
  totalResults.true = 0;
  totalResults.false = 0;

  timerId = setInterval(updateTimer, 1000);
});

yesBtn.addEventListener("click", () => {
  resultLevel === true ? (totalResults.true += 1) : (totalResults.false += 1);
  changeColor();
  console.log(totalResults);
});

noBtn.addEventListener("click", () => {
  resultLevel === false ? (totalResults.true += 1) : (totalResults.false += 1);
  changeColor();
  console.log(totalResults);
});
