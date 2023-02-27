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
  `To Present
  너 군대 갔을 때도 딱히 편지 쓴적은 없는데, 갑자기 쓸라니 머리에 글이 안떠오르긴 하는구만..
  뻘쭘하니까 일단 변경점부터 정리해보자면
  
  1. 편지 아이콘 추가
  2. 초기화 버튼 날림
  3. 인증가능시간 6시반~7시반으로 조정
  4. 버튼 누를때마다 화면 새로고침 추가

  일단 아이콘 크기 및 위치는 다양한 크기의 화면을 고려한 것은 아니라서 버튼을 삐져나가거나 하는 일이 있을 수도 있어.
  너무 신경쓰지 마. 인증 스샷 찍어서 올려둔거 보고 내가 살포시 수정할테니

  아침부터 도서관 가서 공부하니라고 고생이 많다. 
  언제나 그렇듯이 힘내되, 그래도 너무 무리하지는 말고.
  
  오늘의 명언
  
  하루의 가장 달콤한 순간은 새벽에 있다.
  -윌콕스-

  앞으로 진행할 작업
  - 선물을 걸었다면, 선물이 걸렸음을 미리 볼 수 있도록 아이콘 표시 (내용물은 비공개)
  - 편지의 가독성 제고
  `,
  `A Present To Present!
  카카오톡 선물하기로 보낼 수 있는 커피 한 잔!

  3일차 인증 완료한 것을 축하합니다 짞짞짞짞짞!
  이번 작심삼일을 열심히 수행한 너를 위해 커피 한잔 정돈 쏘도록 하겠음!

  인증할 때 "A Present To Present" 문구와 함께 마시고 싶은 특정 브랜드의 커피 한잔 지정해서 밴드에 올려두라구!

  이번 글은 모두 !로 끝난다구!

  오늘의 명언!

  작심삼일도 100번하면 1년이다!
  -???!-
  `,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
];

const achievements = JSON.parse(localStorage.getItem("achievements")) || {
  count: 0,
  date: new Date("1970-01-01"),
};

const progressRate = document.getElementById("progress-rate");
progressRate.innerText = `Task Done ${achievements.count} / 14`;

const buttons = document.querySelectorAll("main button");
const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();
const TimeToReupload = 1000 * 3600 * 23;
let mailIcon = {};

// const buttonClassify = () => {
buttons.forEach((button, number) => {
  if (achievements.count > number) {
    button.classList.replace("not-confirmed", "confirmed");
    button.classList.remove("disabled");
    button.innerText = "Done!";
  }

  const todayNoMore = Boolean(achievements.date != now.getDate());

  const timeOk = Boolean(
    // hour >= 0
    (hour === 6 && min >= 30) || (hour === 7 && min <= 30)
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
    location.reload();
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
    location.reload();
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
