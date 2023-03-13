const achievements = JSON.parse(localStorage.getItem("achievements")) || {
  count: 0,
  date: new Date("1970-01-01"),
  number: 14,
  hour: 6,
  min: 30,
  time: [],
};

const requiredFields = ["count", "date", "number", "hour", "min", "time"];
const isMissingField = requiredFields.some((field) => !(field in achievements));
if (isMissingField) {
  achievements.count = 0;
  achievements.date = new Date("1970-01-01");
  achievements.number = 14;
  achievements.hour = 6;
  achievements.min = 30;
  achievements.time = [];
}

localStorage.setItem("achievements", JSON.stringify(achievements));

const initialize = () => {
  const buttonList = document.getElementById("buttonList");
  const numButtons = achievements.number;

  for (let i = 1; i < numButtons; i++) {
    const newButtonDiv = document.createElement("div");
    const newButton = document.createElement("button");
    newButtonDiv.className = "task";
    newButton.className = "task-button not-confirmed disabled";
    newButtonDiv.appendChild(newButton);
    buttonList.appendChild(newButtonDiv);
  }
};

initialize();

const progressRate = document.getElementById("progress-rate");
const buttons = document.querySelectorAll("main button");
const settings = document.querySelector(".fa-cog");
const devMode = document.getElementById("devMode");
const reinitializeBtn = document.getElementById("reinitialize");
const goalInput = document.getElementById("goalInput");
const goalHour = document.getElementById("goalHour");
const goalMin = document.getElementById("goalMin");
const goalNumber = document.getElementById("goalNumber");
const goalButton = document.getElementById("goalButton");
const rule = document.getElementById("rule");

const now = new Date();
const mode_dev = false;
devMode.style.display = "none";
goalNumber.value = achievements.number;
goalHour.value = achievements.hour;
goalMin.value = achievements.min;
progressRate.innerText = `Task Done ${achievements.count} / ${buttons.length}`;
rule.innerText = `규칙 1 : 4시에서 ${achievements.hour}시 ${achievements.min}분사이에 '기상!' 버튼을 터치하여 인증하세요.

규칙 2 : 하루에 한번만 인증가능합니다.`;

// const buttonClassify = () => {
buttons.forEach((button, number) => {
  const hour = now.getHours();
  const min = now.getMinutes();

  button.innerText = `${number + 1}회`;

  if (achievements.count > number) {
    button.classList.replace("not-confirmed", "confirmed");
    button.classList.remove("disabled");
    button.innerText = achievements.time[number];
  }

  const todayNoMore = mode_dev
    ? true
    : Boolean(achievements.date != now.getDate());

  const timeOk = mode_dev
    ? true
    : Boolean(
        hour >= 4 &&
          (hour < achievements.hour ||
            (hour === achievements.hour && min <= achievements.min))
      );

  const rightOrder = Boolean(number === achievements.count);

  if (timeOk && rightOrder && todayNoMore) {
    button.classList.remove("disabled");
    button.innerText = "기상!";
  }

  // if (letters[number] != "") {
  //   const icon = document.createElement("i");
  //   icon.className = "fa-regular fa-envelope";
  //   button.appendChild(icon);
  // }
});

// };

const taskToDo = document.querySelector("button.not-confirmed:not(.disabled)");

const taskConfirm = () => {
  const month = String(now.getMonth()).padStart(2, 0);
  const day = String(now.getDate()).padStart(2, 0);
  const hour = String(now.getHours()).padStart(2, 0);
  const min = String(now.getMinutes()).padStart(2, 0);

  achievements.count++;
  achievements.date = now.getDate();
  achievements.time.push(`${month}.${day}
  ${hour}:${min}`);
  localStorage.setItem("achievements", JSON.stringify(achievements));

  alert(`${achievements.count}번째 달성을 축하합니다. (달성률 ${(
    (achievements.count / achievements.number) *
    100
  ).toFixed(1)}%)
  
인증 시각 : ${month}월 ${day}일 ${hour}시 ${min}분
  `);
  location.reload();
};

if (taskToDo) {
  taskToDo.addEventListener("click", taskConfirm);
}

// const taskConfirmed = document.querySelectorAll("button.confirmed");

// taskConfirmed.forEach((button, index) => {
//   const letterAgain = () => {
//     alert(letters);
//     location.reload();
//   };
//   button.addEventListener("click", letterAgain);
// });

const taskDisabled = document.querySelectorAll("button.disabled");

taskDisabled.forEach((button, index) => {
  const notAvailable = () => {
    if (achievements.date === now.getDate()) {
      alert("하루에 한 번만 인증 가능합니다!");
    } else {
      alert("정해진 시간이 아니거나 아직 차례가 아닙니다.");
    }
    location.reload();
  };

  button.addEventListener("click", notAvailable);
});

const reinitialize = () => {
  localStorage.removeItem("achievements");
  location.reload();
};

const settingsOnOff = () => {
  const currentDisplay = devMode.style.display;
  currentDisplay === "none"
    ? (devMode.style.display = "flex")
    : (devMode.style.display = "none");
};

const updateAchievements = () => {
  const newNumber = parseInt(goalNumber.value);
  const newHour = parseInt(goalHour.value);
  const newMin = parseInt(goalMin.value);
  achievements.number = newNumber;
  achievements.hour = newHour;
  achievements.min = newMin;
  localStorage.setItem("achievements", JSON.stringify(achievements));
  location.reload();
};

// window.addEventListener("load", createButtons);
goalButton.addEventListener("click", updateAchievements);
reinitializeBtn.addEventListener("click", reinitialize);
settings.addEventListener("click", settingsOnOff);
