'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let game = function () {
  let answer = prompt('Угадай число от 1 до 100');
  let number = 45;
  if (answer == null) {
    alert('Спасибо за игру!');
  } else if (!isNumber(answer)) {
    alert('Введи число!');
    game();
  } else if (answer > 100) {
    alert('Загаданное число меньше');
    game();
  } else if (answer < 0) {
    alert('Загаданное число больше');
    game();
  }
};

game();
