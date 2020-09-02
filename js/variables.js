// файл для збереження наших змінних які знадобляться нам в процесі гри

// gameArea - змінна для ігрового поля
var gameAreaBlock = document.querySelector("#game_area_block");

// distanceTraveledBlock - змінна для блоку пройденої дистанції
var distanceTraveledBlock = null;

// startGameButton - кнопка старта гри на ігровому полі
var startGameButton = null;

// startGameBlock - змінна для блоку стартового поля
var startGameBlock = null;

// countdownBlock - блок зворотнього відліку до кінця гри
var countdownBlock = null;

// theEndGameBlock - блок завершення гри
var theEndGameBlock = null;

// countdownBlockSpan - елемент лічильника зворотнього відліку тег span
var countdownBlockSpan = null;

// clockTimerGame - змінна для функції timerGame лічильника зворотнього відліку гри
var clockTimerGame = null;

// distanceTraveledTimer - змінна для функції tripСounter лічильник пройденної відстані
var distanceTraveledTimer = null;

// numberOfLivesBlock - змінна для блоку з життям
var numberOfLivesBlock = null;

// all_Lives - змінна яка показує скільки ми маємо життів з початку гри
var all_Lives = 5;
// lives - виставляємо такеж саме як і all_Lives
var lives = 5

// dictance - змінна яка показує фактичну відстань
var dictance = 0;

// spaceshipBlock - змінна для блоку космічного корабля
var spaceshipBlock = null;

// obstaclesBlok - змінна для блоку космічних перешкод
var obstaclesBlok = null;

// startTimeGame - змінна для початкового часу гри
var startTimeGame = 75;

// timerObstacles - змінна для функції падіння перешкод fallingObstacles
var timerObstacles = null;

// змінна для інтервалу падіння перешкод
var i = 1;

// width - змінна для функції рандомних розмірів по ширині для перешкод
var width = null;