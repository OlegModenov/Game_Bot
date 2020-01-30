'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let attempts = 10;
let number = Math.floor(Math.random() * 100);

let game = function () {
  let answer = prompt('Угадай число от 1 до 100');
  // let number = Math.floor(Math.random() * 100);
  // console.log(number);
  if (answer == null) {
    alert('Спасибо за игру!');
  } else if (!isNumber(answer)) {
    alert('Введи число!');
    game();
  } else if (answer > number) {
    attempts--;
    if (attempts == 0) {
      let lose = confirm('Попытки закончились, хотите сыграть еще?');
      if (lose == true) {
        attempts = 10;
        number = Math.floor(Math.random() * 100)
        game();
      }
      else {
        alert('Спасибо за игру!');
      }
    } else {
      alert('Загаданное число меньше, у вас осталось ' + attempts + ' попыток');
      game();
    }  
  } else if (answer < number) {
    attempts--;
    if (attempts == 0) {
      let lose = confirm('Попытки закончились, хотите сыграть еще?');
      if (lose == true) {
        attempts = 10;
        number = Math.floor(Math.random() * 100)
        game();
      }
      else {
        alert('Спасибо за игру!');
      }
    } else {
      alert('Загаданное число больше, у вас осталось ' + attempts + ' попыток');
      game();
    }  
  } else {
    let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
    if (win === true) {
      attempts = 10;
      number = Math.floor(Math.random() * 100)
      game();
    }
    else {
      alert('Спасибо за игру!');
    }
  }
};

game();
