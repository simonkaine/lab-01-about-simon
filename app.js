// import functions and grab DOM elements

import { isYes } from "./utils.js";

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// const confirmed = confirm("hello");
// console.log(confirmed);
// const myName = prompt("Am I 5 foot 10 inches tall?");
// console.log(myName);

// get the button element
// add 'click' eventlistener to the button
// on click confirm the user wants to start quiz
// if yes, prompt for at least 3 questions and store the answer
// for each answer, check if the user entered a correct value <<----
// track the number of correct answers
// at end of quiz, update results section with the number of correct answers

const quizButton = document.getElementById('click-me');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=> {
  const confirmed = confirm('would you like to start the quiz?');

  console.log(confirmed);

  if (confirmed) {
    const name = prompt("Whats is you name?");
    const ans1 = prompt("Am i 5 foot ten inches?");
    const ans2 = prompt("Am i 5 foot ten inches?");
    const ans3 = prompt("Am i 5 foot ten inches?");
    console.log(name, ans1, ans2, ans3);
    let score = 0
    if (isYes(ans1)) score++;
    if (isYes(ans2)) score++;
    if (isYes(ans3)) score++;
    console.log(score);
    results.innerText = `${name} you got ${score} right!`
  }
  else {
    console.log("user cancelled");
  }
})

