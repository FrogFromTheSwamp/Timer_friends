/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  let intervalId;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();

    let timeRemaining = (dateStop - dateNow) / 1000;

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let secundes = Math.floor(timeRemaining % 60);
    hours = createNumber(hours);
    minutes = createNumber(minutes);
    secundes = createNumber(secundes);

    return { timeRemaining, hours, minutes, secundes };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.secundes;

    if (getTime.timeRemaining <= 0) {
      clearInterval(intervalId);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  const createNumber = (num) => {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  };

  intervalId = setInterval(updateClock, 1000);
  updateClock();
};

timer("11 november 2025");
