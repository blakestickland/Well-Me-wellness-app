// Sets the css package foundation up to listen for the sliders
$(document).foundation();

const dailyLogForm = document.getElementById("dailyLogForm");
const scoreForm = document.querySelector(".scoreForm");
const calorieInput = document.getElementById("sliderOutputCalories");
const exerciseInput = document.getElementById("sliderOutputExcercise");
const waterInput = document.getElementById("sliderOutputWater");
const sleepInput = document.getElementById("sliderOutputSleep");
const dailyResult = document.querySelector(".dailyResult");

// Event Listener for the daily log form
if (dailyLogForm) {
  dailyLogForm.addEventListener("submit", event => {
    event.preventDefault();
    const userData = {
      calories: parseInt(calorieInput.value),
      exercise: parseInt(exerciseInput.value),
      // eslint-disable-next-line camelcase
      water_intake: parseInt(waterInput.value),
      sleep: parseInt(sleepInput.value)
    };
    const userDataLength = 4;
    // calculates daily score and initiates dailyLog Fetch POST request
    const dailyScore =
      Object.values(userData).reduce(
        (previous, current) => previous + current
      ) / userDataLength;
    // eslint-disable-next-line camelcase
    userData.daily_score = dailyScore;
    dailyLog(userData);
    // removes daily log form to show daily score
    dailyLogForm.classList.add("hide");
    scoreForm.classList.remove("hide");
    dailyResult.innerHTML = dailyScore;
  });
}
// POST request for the daily log
const dailyLog = userData => {
  fetch("/api/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(() => window.location.replace("/members"))
    .catch(err => console.error(err));
};
