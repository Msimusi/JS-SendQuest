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
  `To Present
    
    아침에 일어나서 이 버튼을 누르는 것이 조금은 익숙해졌어?
    너가 내일도 성공적으로 인증한다는 전제로 이 편지를 보는 날은 금요일이겠네
    그래도 벌써 한 번의 주일이 모두 지나갔고, 그 중 4번이나 인증을 성공하다니 대단해!
  
    아 너의 의견이 궁금한게 있어.
    
    1. n번 달성했을 때 n번째 편지 (현행)
      - 2번째 달성 완료하면 2번째 편지.
      - 편지 내용의 컨셉 '언제일진 몰라도 n번째 달성을 축하해!'
    
    2. n번째 날에 달성하면 n번째 편지 
      - 2월 27일에 시작했을 때 2월 28일에 달성하면 28일의 편지 (2번째 편지)
      - 편지 내용의 컨셉 '몇번째인지는 몰라도 이 날의 달성을 축하해!'
    
    나는 원래 1번이 좋을거라 생각했는데, 요새는 좀 헷갈려. 너는 어느쪽이 좋아보여?
    
    오늘의 명언
  
    문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다. 
    - 메이벨 뉴컴버 -`,
  `To Present
  
    벌써 5번째 달성이라니! 이러다 금방 10번 다 채우겠네!
    학기를 시작하고 처음 맞이하는 주말인건데, 오늘은 뭐할거야?
  
    주말에도 일찍 일어나겠다고 한 것을 보면 도서관에 가겠거니 한다만 
    또 너무 무리하다가 금방 지치진 않을까 하는 점도 걱정이다.
  
    난 요새 코딩 강의를 계속 듣고 있는 중이야.
  
    그리고 이번에 수강한 내용을 기반으로 간단한 로그인이라던가, 인증사진을 올린다거나, 댓글을 적는다던가 하는 것들이 가능해졌지
    혹시 궁금해한다면 밴드에 인증글 올릴때 댓글로 링크를 올려보겠음.
  
    이건 너가 이번에 성공적으로 마무리하고, 계속할 의지가 있으면 하는 걸로 할까?
  
    아무튼 푹 쉬건, 도서관을 공부하건 좋은 주말을 보내길 바란다.
  
    아, 다음 번(6번쨰)에 또 중간 선물이 있으니까 파이팅 하라고~
  
    오늘의 명언
    
    사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다. 
    - 괴테 -`,
  `A present To Present
    A present To Present
    
    2번째 작심3일 달성을 축하합니다^^
    2번째 작심3일 달성을 축하합니다^^
  
    이번 선물은 배스킨라빈스 22주니어 (더블주니어) 입니다
    이번 선물은 배스킨라빈스 22주니어 (더블주니어) 입니다
  
    날 추울 때 따스한 집에서 맛나게 먹으라구~
    날 추울 때 따스한 집에서 맛나게 먹으라구~
  
  
    오늘의 명언
    오늘의 명언
    
    2번 한 일은 3번도 할 수 있다.
    2번 한 일은 3번도 할 수 있다.
  
    - ??? -
    - ??? -
  
    어 편지는 콩신의 가호 아래, 글이 2번 반복됐습니다.
    어 편지는 콩신의 가호 아래, 글이 2번 반복됐습니다.`,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
];

const mode_dev = false;

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

  const todayNoMore = mode_dev
    ? true
    : Boolean(achievements.date != now.getDate());

  const timeOk = mode_dev
    ? true
    : Boolean((hour === 5 && min >= 30) || (hour === 6 && min <= 30));

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
mode_dev
  ? (reinitializeBtn.style.display = "inline")
  : (reinitializeBtn.style.display = "none");

const reinitialize = () => {
  localStorage.removeItem("achievements");
  location.reload();
};

// window.addEventListener("load", buttonClassify);
reinitializeBtn.addEventListener("click", reinitialize);
