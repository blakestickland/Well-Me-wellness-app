document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const getLoginFormBtn = document.getElementById("getLoginFormBtn");
  const signUpForm = document.querySelector(".signupForm");
  const loginForm = document.querySelector(".loginForm");

  getLoginFormBtn.addEventListener("click", showLoginForm);

  const showLoginForm = () => {
    signUpForm.classList.add("hide");
    loginForm.classList.remove("hide");
  };

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
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      height: heightInput.val().trim(),
      weight: weightInput.val().trim(),
      age: ageInput.val().trim(),
      gender: genderInput.val().trim(),
      foodPref: foodInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.username,
      userData.email,
      userData.password,
      userData.height,
      userData.weight,
      userData.age,
      userData.gender,
      userData.foodPref
    );
    usernameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    heightInput.val("");
    weightInput.val("");
    ageInput.val("");
    genderInput.val("");
    foodInput.val("");
  });

  const signUpUser = userData => {
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .catch(err => console.error(err));
  };

  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  const loginUser = userData => {
    fetch("/api/login", {
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
});
