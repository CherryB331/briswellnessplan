console.log("Wellness Tips To Keep Myself Accountable");
const diet = "Diet";
const fitness = "Fitness";
const sleep = "Sleep";
const mentalhealth = "Mental Health";
let goal = [diet, fitness, sleep, mentalhealth];
console.log(goal[0]);
console.log(goal[1]);
console.log(goal[2]);
console.log(goal[3]);
let weight = null;
console.log(weight);
let workout = 
    {name:"Lifting Weights",
     set:3,
     rep:10,
     rest:"1 minute"};
console.log(workout);
let sleeptime = 8;
console.log(sleeptime);
let mhealth = "Giving myself a break";
console.log(mhealth);
let meditate = false
console.log(meditate);
let weightlost;
let food = ["Vegetables", "Fruit", "Chicken", "Beef"];
console.log (food)
food.push("Salmon");
food.pop();
console.log(food [0]);
console.log(food [1]);
console.log(food [2]);
console.log(food [3]);

function eat(diet,food){console.log("In order to maintain my " + goal[0] + ", I will eat foods like " + food[0] + ", " + food[1] + ", " + food[2] + ", and " + food[3] + ".");}
function move(fitness,workout){console.log("In order to " + goal[1] + "effectively, I will " + workout.name + " for " + workout.set + " sets of " + workout.rep + " reps with " + workout.rest + " rest.");}
function lay(sleep,sleeptime){console.log("In order to improve my " + goal[2] + ", I will aim for " + sleeptime + " hours of sleep each night.");}
function brain(mentalhealth,mhealth){console.log("In order to support my " + goal[3] + ", I will practice " + mhealth + " regularly.");}
eat(diet,food);
move(fitness,workout);
lay(sleep,sleeptime);
brain(mentalhealth,mhealth);