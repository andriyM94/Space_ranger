// Головний файл для контроля логіки гри

//	виконання даноъ функцыъ при запуску в браузеры
function start() {
  // добавляжмо стартовий блок гри
  createStarGametBlock();
  // при натиснені на кнопку визиваємо старт гри
  startGameButton.onclick = startGame;
}


// при запуску гри виконуємо дану функцію
function startGame() {
  // вмдалення стартового болку
  deleteStarGametBlock();
  // добавлення блоку пройденого шляху
  createDistanseTraveledBlock();
  // добавлення блоку ігрового часу
  creatСountdownBlock();
  // добавлення блоку життів
  createNumberOfLivesBlock();
  // запуск лічильник пройденого шляху
  tripСounter();
  // запускаємо таймер гри 
  timerGame();
  // добавлення космічного корабля
  createSpaceshipBlock();
  // добавлення космічних перешкод
  creaateObstaclesBlok();
  // визиваємо дану функцію і даємо змогу рухати кораблем
  motionSpaceshipBlock();
}

start();

// theEndGame - функція кінця гри
function theEndGame() {
  // збільшення часу інтурвалу для уникнення пришвидшення падінняя перешкод
  // при наступній ітерації коду
  i = i + 7;
  // обнуляємо функціонал руху корабля для уникнення зайвих помилок у консолі
  window.onkeydown = null;

  // обнуляємо всі таймери
  clearInterval(distanceTraveledTimer);
  clearInterval(timerObstacles);
  clearInterval(clockTimerGame);
  
  // видаляємо всі блоки кри  
  deleteCountdownBlock();

  deleteDistanseBlock();

  deleteNumberOfLivesBlock();
  
  deleteSpaceshipBlock();

  deleteObstaclesBlok();

  // запускажмо блок кінця гри 
  createTheEndGameBlock();

  // обнуляємо змінну пройденної вілстанні
  dictance = 0; 

  // при кліку на кнопку заново запускаємо гру
  startButton.onclick = function () {
  	// видаляємо блок кінця гри
    deleteTheEndGameBlock();
    // запускаємо гру по новому кругу
    startGame();
  }


}