'use strict';
let numberEle = document.querySelector('.number');
let scoreEle = document.querySelector('.score');
let messageEle = document.querySelector('.message');
let checkBtn = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let highscore = 0;
let score = 20;
checkBtn.addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guess').value);

  if (!guessNum) {
    messageEle.textContent = '🙅⛔No Number';
    console.log(typeof numberEle);
  } else if (guessNum === secretNumber) {
    numberEle.textContent = secretNumber;
    messageEle.textContent = '🎉🎉Congrats🎉🎉';
    score++;
    scoreEle.textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEle.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      messageEle.textContent = guessNum > secretNumber ? 'Too High' : 'Too Low';
      score--;
      scoreEle.textContent = score;
    } else {
      messageEle.textContent = 'You loose the Game';
      scoreEle.textContent = 0;
    }
  }
  //   } else if (guessNum > secretNumber) {
  //     if (score > 1) {
  //       messageEle.textContent = 'Too High';
  //       score--;
  //       scoreEle.textContent = score;
  //     } else {
  //       messageEle.textContent = 'You loose the Game';
  //       scoreEle.textContent = 0;
  //     }
  //   } else if (guessNum < secretNumber) {
  //     if (score > 1) {
  //       messageEle.textContent = 'Too Low';
  //       score--;
  //       scoreEle.textContent = score;
  //     } else {
  //       messageEle.textContent = 'You loose the Game';
  //       scoreEle.textContent = 0;
  //     }
  //   }
});

let againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  messageEle.textContent = 'Start Guessing.....';
  scoreEle.textContent = 20;
  numberEle.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
  numberEle.style.width = '15rem';
});
