$(document).foundation();

const dailyLogForm = document.getElementById("dailyLogForm");
const dailyScoreForm = document.querySelector("#dailyScoreForm");
const calorieInput = document.getElementById("sliderOutputCalories");
const exerciseInput = document.getElementById("sliderOutputExercise");
const waterInput = document.getElementById("sliderOutputWater");
const sleepInput = document.getElementById("sliderOutputSleep");
const score = document.getElementById("score");

// Event Listener for the daily log form
if (dailyLogForm) {
  dailyLogForm.addEventListener("submit", event => {
    event.preventDefault();
    const userData = {
      calories: parseInt(calorieInput.value),
      exercise: parseInt(exerciseInput.value),
      // eslint-disable-next-line camelcase
      water_intake: parseInt(waterInput.value),
      sleep: parseInt(sleepInput.value),
    };
    const userDataLength = 4;
    // calculates daily score and initiates dailyLog Fetch POST request
    const dailyScore =
      Object.values(userData).reduce(
        (previous, current) => previous + current
      ) / userDataLength;
    // eslint-disable-next-line camelcase
    userData.daily_score = dailyScore;
    userData.UserId = "";
    dailyLog(userData);
    // removes daily log form to show daily score
    dailyLogForm.classList.add("hide");
    dailyScoreForm.classList.remove("hide");
    //append score to page
    score.innerHTML = dailyScore;
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
// update users weight and goals in the database
const weightUpdate = document.querySelector(".weightUpdate");
const activityUpdate = document.querySelector(".activityUpdate");
const goalUpdate = document.querySelector(".goalUpdate");
const weightForm = document.getElementById("changeYourWeight");
//event listener for updateweight form
if (weightForm) {
  weightForm.addEventListener("submit", event => {
    event.preventDefault();
    const updateData = {
      weight: weightUpdate.value.trim(),
      activity: activityUpdate.value.trim(),
      goal: goalUpdate.value.trim()
    };
    console.log("userdata to update", updateData);
    updateUser(updateData);
  });
}
// Patch request to update user data
const updateUser = updateData => {
  fetch("/api/members", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateData)
  })
    .then(() => {
      window.location.replace("/members");
    })
    .catch(err => console.error(err));
};
// send the user to the recipe page
const imgLink = document.querySelector(".recipeImg");

imgLink.addEventListener("click", () => {
  window.location.href = "/recipeInspiration";
});
