document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const signUpForm = document.querySelector("#signupForm");
  const usernameInput = document.querySelector(".usernameInput");
  const emailInput = document.querySelector(".emailInput");
  const passwordInput = document.querySelector(".passwordInput");
  const heightInput = document.querySelector(".heightInput");
  const weightInput = document.querySelector(".weightInput");
  const ageInput = document.querySelector(".ageInput");
  const genderInput = document.querySelector(".genderInput");
  const foodInput = document.querySelector(".foodInput");
  const activityInput = document.querySelector(".activityInput");
  const goalInput = document.querySelector(".goalInput");

  // Event listener for signup form
  if (signUpForm) {
    signUpForm.addEventListener("submit", event => {
      event.preventDefault();
      const userData = {
        name: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        height: heightInput.value.trim(),
        weight: weightInput.value.trim(),
        age: ageInput.value.trim(),
        gender: genderInput.value.trim(),
        diet: foodInput.value.trim(),
        activity: activityInput.value.trim(),
        goal: goalInput.value.trim()
      };
      if (!userData.email || !userData.password) {
        return;
      }
      // Initiates signUpUser Fetch POST request
      signUpUser(userData);
      usernameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      heightInput.value = "";
      weightInput.value = "";
      ageInput.value = "";
      genderInput.value = "";
      foodInput.value = "";
      activityInput.value = "";
      goalInput.value = "";
    });
  }
  // fetch POST request to signup user
  const signUpUser = userData => {
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(() => {
        window.location.replace("/members");
      })
      .catch(err => console.error(err));
  };
});
