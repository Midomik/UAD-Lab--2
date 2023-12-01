const leftColor = document.querySelector('.left_color_title');
const right = document.querySelector('.right_color');
const yesBtn = document.querySelector('.btn_yes');
const noBtn = document.querySelector('.btn_no');
const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start_btn');

let time_mode = document.getElementById('first').checked ? 30 : 60;
console.log(document.getElementById('first').checked);
console.log(time_mode);

let valueTimer = time_mode;
let timerId;
let resultLevel;

const colorForEasyModeGame = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#00FF00' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Brown', hex: '#A52A2A' },
];

const colorForMediumModeGame = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#008000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Gold', hex: '#FFD700' },
];

const colorForHardModeGame = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#008000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Olive', hex: '#808000' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Slate Gray', hex: '#708090' },
  { name: 'Aqua', hex: '#00FFFF' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Salmon', hex: '#FA8072' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Dark Green', hex: '#006400' },
];

let nameColorArr = colorForEasyModeGame;

const totalResults = {
  true: 0,
  false: 0,
};

document.querySelector('.start_btn').disabled = true;
document.querySelector('.progress_container').style.display = 'none';
function updateTimer() {
  //   console.log(valueTimer);

  valueTimer--;
  timer.innerHTML = valueTimer;
  if (valueTimer <= 0) {
    clearInterval(timerId);
    console.log('Час вийшов!');
    startBtn.style.display = 'block';
    document.querySelector('.control_container').style.display = 'none';
    document.querySelector('.color_container').style.display = 'none';
    document.querySelector('.result_container').style.display = 'flex';
    document.querySelector('.game_time_container').style.display = 'block';
    document.querySelector('.progress_container').style.display = 'block';
    document.querySelector('.select_mode_container').style.display = 'flex';
    document.querySelector('.test_for_daltonism_container').style.display =
      'block';

    document.querySelector(
      '.true_result'
    ).innerHTML = `Corectly: ${totalResults.true}`;

    document.querySelector(
      '.false_result'
    ).innerHTML = `Incorectly: ${totalResults.false}`;
    console.log(document.getElementById('first'));

    document.querySelector('.progress_bar').max =
      totalResults.false + totalResults.true;
    document.querySelector('.progress_bar').value = totalResults.true;

    let time_mode = document.getElementById('first').checked ? 30 : 60;
    valueTimer = time_mode;
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

startBtn.addEventListener('click', () => {
  changeColor();
  let time_mode = document.getElementById('first').checked ? 30 : 60;
  timer.innerHTML = time_mode;
  timer.style.display = 'block';
  document.querySelector('.control_container').style.display = 'flex';
  document.querySelector('.color_container').style.display = 'flex';
  startBtn.style.display = 'none';
  document.querySelector('.result_container').style.display = 'none';
  document.querySelector('.game_time_container').style.display = 'none';
  document.querySelector('.progress_container').style.display = 'none';
  document.querySelector('.select_mode_container').style.display = 'none';
  document.querySelector('.test_for_daltonism_container').style.display =
    'none';

  startBtn.innerHTML = 'Rety';
  // reset totalResult
  totalResults.true = 0;
  totalResults.false = 0;

  timerId = setInterval(updateTimer, 1000);
});

yesBtn.addEventListener('click', () => {
  resultLevel === true ? (totalResults.true += 1) : (totalResults.false += 1);
  changeColor();
  console.log(totalResults);
});

noBtn.addEventListener('click', () => {
  resultLevel === false ? (totalResults.true += 1) : (totalResults.false += 1);
  changeColor();
  console.log(totalResults);
});
//////////////////////////////////////////////////////////////////////////////////////////////
const toggle = document.querySelector('.toggle-button');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

toggle.addEventListener('click', () => {
  let isActive = toggle.classList.contains('active');
  if (isActive) {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.game_title').style.color = 'white';
    document.querySelector('.togle_title').style.color = 'white';
    document.querySelector('.timer_container').style.color = 'white';
    document.querySelector('.game_time_container').style.color = 'white';
    document.querySelector('.test_for_daltonism_container').style.color =
      'white';
    document.querySelector('.true_result').style.color = 'white';
    document.querySelector('.false_result').style.color = 'white';
  } else {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.game_title').style.color = 'black';
    document.querySelector('.togle_title').style.color = 'balck';
    document.querySelector('.timer_container').style.color = 'black';
    document.querySelector('.game_time_container').style.color = 'black';
    document.querySelector('.test_for_daltonism_container').style.color =
      'black';
    document.querySelector('.true_result').style.color = 'black';
    document.querySelector('.false_result').style.color = 'black';
  }
});

document.querySelector('.game_time_container').addEventListener('click', () => {
  let time_mode = document.getElementById('first').checked ? 30 : 60;

  valueTimer = time_mode;
});

document.querySelector('.select_mode').addEventListener('click', () => {
  const selectedMode = document.querySelector('.select_mode').value;
  if (selectedMode === 'ease') {
    nameColorArr = colorForEasyModeGame;
  } else if (selectedMode === 'medium') {
    nameColorArr = colorForMediumModeGame;
  } else if (selectedMode === 'hard') {
    nameColorArr = colorForHardModeGame;
  }
  console.log(nameColorArr);
});

document.querySelector('.test_for_daltonism').addEventListener('click', () => {
  if (document.querySelector('.test_for_daltonism').checked) {
    document.querySelector('.start_btn').disabled = false;
  } else {
    document.querySelector('.start_btn').disabled = true;
  }
});
