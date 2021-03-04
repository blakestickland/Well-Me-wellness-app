// Sets the css package foundation up to listen for the sliders
$(document).foundation();

// $(document).ready(() => {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//$.get("/api/user_data").then(data => {
//  $(".member-name").text(data.name);
//});

const dailyLogForm = document.getElementById("dailyLogForm");
const dailyScoreForm = document.getElementById("dailyScoreForm");
const calorieInput = document.getElementById("sliderOutputCalories");
const exerciseInput = document.getElementById("sliderOutputExcercise");
const waterInput = document.getElementById("sliderOutputWater");
const sleepInput = document.getElementById("sliderOutputSleep");

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
    // calculates daily score and calls dailyLog Fetch request
    const dailyScore =
      Object.values(userData).reduce(
        (previous, current) => previous + current
      ) / userDataLength;
    // eslint-disable-next-line camelcase
    userData.daily_score = dailyScore;
    dailyLog(userData);
    // removes daily log form to show daily score
    dailyLogForm.classList.add("hide");
    dailyScoreForm.classList.remove("hide");
  });
}
// Fetch request for the daily log
const dailyLog = userData => {
  fetch("/api/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(() => {
      window.location.replace("/members");
    })
    .catch(err => console.error(err));
};
