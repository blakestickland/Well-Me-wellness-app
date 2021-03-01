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

  // When the signup button is clicked, we validate the email and password are not blank and store all user information in userData //
  signUpForm.addEventListener("submit", event => {
    event.preventDefault();
    const userData = {
      username: usernameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
      height: heightInput.value.trim(),
      weight: weightInput.value.trim(),
      age: ageInput.value.trim(),
      gender: genderInput.value.trim(),
      diet: foodInput.value.trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    heightInput.value = "";
    weightInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
    foodInput.value = "";
  });

  const signUpUser = userData => {
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      // eslint-disable-next-line prettier/prettier
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        window.location.href = "/members";
      })
      .catch(err => console.error(err));
  };
});
