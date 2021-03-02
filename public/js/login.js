document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const loginForm = document.querySelector("#loginForm");
  const loginEmail = document.querySelector(".loginEmail");
  const loginPassword = document.querySelector(".loginPassword");

  const loginUser = (userData) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace("/members");
        } else {
          alert("Error");
          return;
        }
      })
      
      .catch((err) => console.error(err));
  };

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const userData = {
        email: loginEmail.value.trim(),
        password: loginPassword.value.trim(),
      };

      if (!userData.email || !userData.password) {
        return;
      }
      //If we have an email and password we run the loginUser function and clear the form
      loginUser(userData);
      loginEmail.value = "";
      loginPassword.value = "";
    });
  }
  //loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  console.log("fetch", userData);
});
