const letters = [
  "Letter 1",
  "Letter 2",
  "Letter 3",
  "Letter 4",
  "Letter 5",
  "Letter 6",
  "Letter 7",
  "Letter 8",
  "Letter 9",
  "Letter 10",
  "Letter 11",
  "Letter 12",
  "Letter 13",
  "Letter 14",
];

const achievements = JSON.parse(localStorage.getItem("achievements")) || {
  count: 0,
  date: new Date("1970-01-01").getTime(),
};

const progressRate = document.getElementById("achievement-count");
progressRate.innerText = `Task Done ${achievements.count} / 14`;

const buttons = document.querySelectorAll("button");
const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();

// const buttonClassify = () => {
buttons.forEach((button, number) => {
  if (achievements.count > number) {
    button.classList.replace("not-confirmed", "confirmed");
    button.classList.remove("disabled");
    button.innerText = "Done!";
  }

  const timeOk = Boolean(
    hour >= 5
    // (hour === 5 && min >= 30) || (hour === 6 && min <= 30)
  );
  const rightOrder = Boolean(number === achievements.count);

  if (timeOk && rightOrder) {
    button.classList.remove("disabled");
  }
});

const taskToDo = document.querySelector("button.not-confirmed:not(.disabled)");

const taskConfirm = () => {
  if (now < achievements.date) {
    alert("Can confirm only once a day");
  } else {
    achievements.count++;
    achievements.date = now;
    localStorage.setItem("achievements", JSON.stringify(achievements));
    alert(letters[achievements.count - 1]);
    location.reload();
  }
};

taskToDo.addEventListener("click", taskConfirm);

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
    alert("Not Available");
  };
  button.addEventListener("click", notAvailable);
});

// window.addEventListener("load", buttonClassify);
