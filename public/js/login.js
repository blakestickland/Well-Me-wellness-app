/*
//const getLoginFormBtn = document.getElementById("getLoginFormBtn");
  //const loginForm = document.querySelector(".loginForm");

  //getLoginFormBtn.addEventListener("click", showLoginForm);

  //const showLoginForm = () => {
  //  signUpForm.classList.add("hide");
  //  loginForm.classList.remove("hide");
  //};
  //loginForm.addEventListener("submit", event => {
  //  event.preventDefault();
  //  const userData = {
  //    email: emailInput.val().trim(),
  //    password: passwordInput.val().trim()
  //  };

  //  if (!userData.email || !userData.password) {
  //    return;
  //  }
// If we have an email and password we run the loginUser function and clear the form
  //  loginUser(userData.email, userData.password);
  //  emailInput.val("");
  //  passwordInput.val("");
  //});

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
  */
