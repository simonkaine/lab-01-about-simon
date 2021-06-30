// import functions and grab DOM elements

import { countsAsAYes } from "./utils.js";

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
const message = document.getElementById('outcome-message');

quizButton.addEventListener('click', ()=> {

  const confirmed = confirm('would you like to start the quiz?');

  console.log(confirmed);

  if (confirmed) {

    const name = prompt('What is your name?');
    const ans1 = prompt('Am i five foot nine inches tall?');
    const ans2 = prompt('Do I hate watching movies?');
    const ans3 = prompt("Is it true, I really can't whistle.");
    const ans4 = prompt('Do I like to ride a bike?');
    const ans5 = prompt('Am I a fan of welding?');
    const ans6 = prompt('Can I wood craft?');
    const ans7 = prompt('Do I hate coding?');
    const ans8 = prompt('Is my favorite food is tacos?');
    const ans9 = prompt('Do I have boy dog named Kota?');
    const ans10 = prompt('Do I live in a town named Milwaukie?');
    console.log(name, ans1, ans2, ans3);

    let score = 0

    if (!(countsAsAYes(ans1))) score++;
    if (!(countsAsAYes(ans2))) score++;
    if (countsAsAYes(ans3)) score++;
    if (countsAsAYes(ans4)) score++;
    if (countsAsAYes(ans5)) score++;
    if (countsAsAYes(ans6)) score++;
    if (!(countsAsAYes(ans7))) score++;
    if (!(countsAsAYes(ans8))) score++;
    if (!(countsAsAYes(ans9))) score++;
    if (countsAsAYes(ans10)) score++;

    console.log(score);
    alert('Finished Quiz! Check below for your score!');

    const percentage = score / 10 * 100;
    results.innerText = `${name} you got ${score} out of 10 correct! That's ${percentage}%`;
    if (score <= 9) {
      results.style.color = 'red';
      message.innerText = "Unfortunatly you didn't get 100% correct. I'm sad now :,(";
    } else {
      results.style.color = 'green';
      message.innerText = 'Great job! 100% correct! You know me so well!';
    };
  }
  else {
    console.log('user cancelled');
  }
})

