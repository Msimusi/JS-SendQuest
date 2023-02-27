const letters = [
  `설마 첫날부터 실패하진 않았겠지? 하는 마음으로 편지를 남긴다. 
  이게 날짜가 아니라 순번을 기준으로 삼아놔가지고, 정확하게 언제 볼거다 라고 예상하기는 어렵네. 
  아무튼 어떻게 편지를 적어서 전달할까 고민하다가 코딩도 배우는 중인데 하면서 최소한의 기능만 구현하며 뚝딱 해봤다. 
  
  너가 그동안 생활패턴 문제로 얼마나 고생했는지 알고 있고 그래서 제대로 성공했으면 한다.
  그렇다고 또 너무 부담갖고 맘고생하지는 말고, 나름 재밌더라. 이런거 만드는거
  달성 기념 선물은 자동으로 주게 짜는 실력은 못되고, 14번의 버튼 중 어딘가에 내 약속을 이런 편지로 박아둘거다. 그거 보여주면 돼
  솔직히 말하자면 아직 나도 몇번 했을 때 무엇을 줄 것인지 결정한 것은 없어~
  
  우선 대충 확인할 수 있는 것들은 얼추 확인해봤는데, 혹시 정상작동하지 않는 부분이 있으면 따로 말해줘.
  
  여튼 뭐, 힘내자 파이팅 27th Feb

  앞으로 할 작업들
  - 편지들 (쒯)
  - 편지 작성했을 경우 해당 버튼에 편지 아이콘 출력하기
  - 편지를 좀 더 가독성 있게 전달하는 법 궁리..`,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "asdasdasd",
  "",
  "",
  "",
  "",
  "",
];

const achievements = JSON.parse(localStorage.getItem("achievements")) || {
  count: 2,
  date: new Date("1970-01-01"),
};

const progressRate = document.getElementById("achievement-count");
progressRate.innerText = `Task Done ${achievements.count} / 14`;

const buttons = document.querySelectorAll("main button");
const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();
const TimeToReupload = 1000 * 3600 * 23;
let mailIcon = {};

// const buttonClassify = () => {
buttons.forEach((button, number) => {
  // console.dir(button);
  // console.log("children before : ", button.children);

  if (achievements.count > number) {
    button.classList.replace("not-confirmed", "confirmed");
    button.classList.remove("disabled");
    button.innerText = "Done!";
  }

  // console.dir(button);
  // console.log(button.children);

  const todayNoMore = Boolean(achievements.date != now.getDate());

  const timeOk = Boolean(
    (hour === 5 && min >= 30) || (hour === 6 && min <= 30)
  );
  const rightOrder = Boolean(number === achievements.count);

  if (timeOk && rightOrder && todayNoMore) {
    button.classList.remove("disabled");
    button.innerText = "기상!";
  }

  if (letters[number] != "") {
    const icon = document.createElement("i");
    icon.className = "fa-regular fa-envelope";
    button.appendChild(icon);
  }
});

// };

const taskToDo = document.querySelector("button.not-confirmed:not(.disabled)");

const taskConfirm = () => {
  achievements.count++;
  achievements.date = now.getDate();
  localStorage.setItem("achievements", JSON.stringify(achievements));
  // buttonClassify();
  alert(letters[achievements.count - 1]);
  location.reload();
};

if (taskToDo) {
  taskToDo.addEventListener("click", taskConfirm);
}

const taskConfirmed = document.querySelectorAll("button.confirmed");

taskConfirmed.forEach((button, index) => {
  const letterAgain = () => {
    alert(letters[index]);
  };
  button.addEventListener("click", letterAgain);
});

const taskDisabled = document.querySelectorAll("button.disabled");

taskDisabled.forEach((button, index) => {
  const notAvailable = () => {
    if (achievements.date === now.getDate()) {
      alert("하루에 한 번만 인증 가능합니다!");
    } else {
      alert("정해진 시간이 아니거나 아직 차례가 아닙니다.");
    }
  };

  button.addEventListener("click", notAvailable);
});

const reinitializeBtn = document.getElementById("reinitialize");

const reinitialize = () => {
  localStorage.removeItem("achievements");
  location.reload();
};

// window.addEventListener("load", buttonClassify);
reinitializeBtn.addEventListener("click", reinitialize);
