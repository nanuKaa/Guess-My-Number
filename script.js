'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Nanukamagaria';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = '24';
document.querySelector('.score').textContent = '10';
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
document.querySelector('.guess').value = '24';
console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener
('click', function (){
    console.log(document.querySelector('.guess').value);
})
*/

const refreshButton = document.querySelector('.again');
const refreshPage = () => {
  location.reload();
};
refreshButton.addEventListener('click', refreshPage);
const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  ///when thare is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } /// when player is winer
  else if (secretnumber === guess) {
    document.querySelector('.message').textContent = 'Corect number!';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too HIght!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
