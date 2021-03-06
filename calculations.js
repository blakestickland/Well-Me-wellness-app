const calculate = require("fitness-health-calculations");

const myBmr = calculate.bmr("female", 22, 168, 65);
const totalCaloricNeeds = calculate.caloricNeeds(
  "male",
  22,
  195,
  95,
  "high",
  "gain",
  "agressive"
);
const idealBodyWeight = calculate.idealBodyWeight(167, "female");

/*{
    id: 9,
    name: 'Des',
    email: 'des@gmail.com',
    password: '$2a$10$lvBpTRyiBwYs8GPo7/L2ie.rHcCktEeWHpYK3mSjt67lGuDtmSv/2',
    weight: 56,
    height: '170.00',
    age: 23,
    gender: 'Female',
    diet: 'None',
    activity: 'Sedentary',
    goal: 'Reduction',
    createdAt: '2021-03-03T11:27:40.000Z',
    updatedAt: '2021-03-03T11:27:40.000Z'
  }*/

function userBMR() {
  console.log(myBmr);
}
userBMR();

function userCaloricNeeds() {
  console.log(totalCaloricNeeds);
}
userCaloricNeeds();

function idealWeight() {
  console.log(idealBodyWeight);
}
idealWeight();
