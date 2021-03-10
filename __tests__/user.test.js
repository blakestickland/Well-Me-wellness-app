const { User } = require("../models");

//test creation of an object user

describe("User", () => {
  describe("User object", () => {
    it("should return an object with name, email, password, weight, height, age, gender, diet, activity, goal, idealWeight and idealCalories", () => {
      User.create({
        name: "Fred",
        email: "Fred@fred.com",
        password: "123qwe",
        weight: 90,
        height: 100.1,
        age: 40,
        gender: "Female",
        diet: "Vegetarian",
        activitiy: "Sedentary",
        goal: "Weightloss",
        idealWeight: 65,
        idealCalories: 1300
      }).then(response => {
        User.findAll({
          where: {
            id: response.id
          }
        }).then(newUser => {
          expect(newUser.name.toEqual("Fred"));
          expect(newUser.email.toEqual("Fred@fred.com"));
          expect(newUser.password.toEqual("123qwe"));
          expect(newUser.weight.toEqual(90));
          expect(newUser.height).toBeCloseTo(100.1);
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
  });
});
