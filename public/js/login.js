document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const loginForm = document.querySelector("#loginForm");
  const loginEmail = document.querySelector(".loginEmail");
  const loginPassword = document.querySelector(".loginPassword");

  // fetch request for the user login
  const loginUser = userData => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.status === 200) {
          window.location.replace("/members");
        } else {
          alert("Error");
          return;
        }
      })
      .catch(err => console.error(err));
  };
  // Event listener for the login form
  if (loginForm) {
    loginForm.addEventListener("submit", event => {
      event.preventDefault();
      const userData = {
        email: loginEmail.value.trim(),
        password: loginPassword.value.trim()
      };
      if (!userData.email || !userData.password) {
        return;
      }
      // clears the form
      loginUser(userData);
      loginEmail.value = "";
      loginPassword.value = "";
    });
  }
});
