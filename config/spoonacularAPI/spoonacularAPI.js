"use strict";

const API_APP_KEY2 = "&apiKey=74f87b20cfd04c5aa17c1f09d672b5fa";
const API_APP_KEY3 = "?apiKey=c147831ac0e740369f586aebbffd9590"; // second API key for times when 402 error is returned
const API_APP_KEY4 = "?apiKey=12379bbb78244c0189010a85deb6a8e3"; // third API key for times when 402 error is returned

const API_PATH= "https://api.spoonacular.com/recipes/complexSearch";
const API_PATH2 = "https://api.spoonacular.com/recipes/";
let recipesReturned = [];

// Gets a bunch of recipes matching the keyword searched.
let apiUrl = API_PATH;
let apiUrlExtension = "?diet=" + "vegan"; // this is where we need the result of the diet dropdown entered
let apiNumberOfResults = "&number=4";  
apiUrl += apiUrlExtension + apiNumberOfResults + API_APP_KEY2;

let apiUrl2 = API_PATH2;
let id;
let apiUrlExtension2 = "/information";
let apiUrlExtension3 = "&includeNutrition=true";

$.ajax({
    url: apiUrl,
    method: "GET"
}).then(function(response) {
    console.log(apiUrl);
    console.log(response);
    console.log(response.results.length);
    for (let i = 0; i < response.results.length; i++) {
      id = response.results[i].id;
      console.log(id);
      let query = apiUrl2 + id + apiUrlExtension2 + API_APP_KEY4 + apiUrlExtension3;
      console.log(query);
      $.ajax({
        url: query,
        method: "GET"
      }).then((response) => {
        console.log(response.title); 
        console.log(response.image);
        console.log(response.spoonacularSourceUrl);
      });
    };
});
// -------
// to do change responses to objects to be called instead of console logged.