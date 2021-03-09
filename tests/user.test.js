const User = require("../models/user.js");

//Test User

describe("User", () => {
  describe("User object", () => {
    it("should return an object with name, email, password, weight, height, age, gender, diet, activity, goal, idealWeight and idealCalories", () => {
      const newUser = new User(
        "Lee",
        "lee@gmail.com",
        "easy@111",
        70,
        170.1,
        38,
        "Female",
        "Vegetarian",
        "Sedentary",
        "Weighloss",
        65,
        1300
      );

      expect(newUser.name.toEqual("Lee"));
      expect(newUser.email.toEqual("lee@gmail.com"));
      expect(newUser.password.toEqual("easy@111"));
      expect(newUser.weight.toEqual(70));
      expect(newUser.height).toBeCloseTo(170.1);
      expect(newUser.age.toEqual(38));
      expect(newUser.gender.toEqual("Female"));
      expect(newUser.diet.toEqual("Vegetarian"));
      expect(newUser.activity.toEqual("Sedentary"));
      expect(newUser.goal.toEqual("Weightloss"));
      expect(newUser.idealWeight.toEqual(65));
      expect(newUser.idealCalories.toEqual(1300));
    });
  });
});
