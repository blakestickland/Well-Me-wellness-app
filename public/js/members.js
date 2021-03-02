// Sets the css package foundation up to listen for the sliders
$(document).foundation();

// $(document).ready(() => {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(data => {
//     $(".member-name").text(data.name);
//   });
// });

const calorieInput = document.getElementById("sliderOutputCalories");
const exerciseInput = document.getElementById("sliderOutputExcercise");
const waterInput = document.getElementById("sliderOutputWater");
const sleepInput = document.getElementById("sliderOutputSleep");
const dailylogBtn = document.getElementById("dailylogBtn");

if (dailylogBtn) {
  dailylogBtn.addEventListener("submit", event => {
    event.preventDefault();
    const userData = {
      calories: calorieInput.value,
      exercise: exerciseInput.value,
      // eslint-disable-next-line camelcase
      water_intake: waterInput.value,
      sleep: sleepInput.value
    };
    const dailyScore = (sum(userData) / 4) * 100;
    // eslint-disable-next-line camelcase
    userData.push({ daily_score: dailyScore });
    console.log(dailyScore);
    dailyLog(userData);
  });
}

//log does a post to our "api/login" route and if successful, redirects us the the members page
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

// make calculation of daily score, send it to the data base and upload the score to the handlebars
