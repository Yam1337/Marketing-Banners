let now = Date.now();
let nextWeek = now + 604800000;

let timeLeft = nextWeek - now;

let myTime = document.getElementById("time");

let countTime = () => {
  timeLeft = timeLeft - 1000;
  let days = Math.floor(timeLeft / 86400000);
  let hours = Math.floor(timeLeft / 3600000) - days * 24;
  let minutes = Math.floor(timeLeft / 60000) - days * 1440 - hours * 60;
  let seconds =
    Math.floor(timeLeft / 1000) - days * 86400 - hours * 3600 - minutes * 60;
  myTime.innerText = `Do końca pozostało: ${days} dn., ${hours} godz. i ${minutes} min.`;
  if (days <= 0 && hours <= 0 && minutes <= 0) {
    clearInterval(timerId);
    myTime.innerHTML = "Do końca pozostało: 0 dn., 0 godz. i 0 min.";
  }
};

let timerId = setInterval(() => countTime(), 1000);
