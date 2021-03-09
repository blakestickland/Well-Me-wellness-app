const User = require("../models/user.js");

//Test User

describe("User", () => {
  describe("User object", () => {
    it("should return an object with name, email, password, weight, height, age, gender, diet, activity, goal, idealWeight and idealCalories", () => {
      const newUser = new User(
        "Fred",
        "Fred@fred.com",
        "123qwe",
        90,
        100.10,
        40,
        "Female",
        "Vegetarian",
        "Sedentary",
        "Weightloss",
        65,
        1300
      );

      expect(newUser.name.toEqual("Fred"));
      expect(newUser.email.toEqual("Fred@fred.com"));
      expect(newUser.password.toEqual("123qwe"));
      expect(newUser.weight.toEqual(90));
      expect(newUser.height).toBeCloseTo(100.10);
      expect(newUser.age.toEqual(40));
      expect(newUser.gender.toEqual("Female"));
      expect(newUser.diet.toEqual("Vegetarian"));
      expect(newUser.activity.toEqual("Sedentary"));
      expect(newUser.goal.toEqual("Weightloss"));
      expect(newUser.idealWeight.toEqual(65));
      expect(newUser.idealCalories.toEqual(1300));
    });
  });
});