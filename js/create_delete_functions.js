// файл з функціями створення та видалення елементів гри

/*==================================
  Створення елементів гри
==================================*/

// createStartBlock створення стартового поля
function createStarGametBlock() {
	
	// создаём блок div --- <div id="start_game_block">
	startGameBlock = document.createElement("div");
	startGameBlock.id = "start_game_block";
	
	// создаём кнопку <button id="start-knopka">НАЧАТЬ</button>
	startGameButton = document.createElement("button");
	startGameButton.id = "start-knopka";
	startGameButton.innerText = "Start game";

	var startGameImg = document.createElement("img");
	startGameImg.src = "img/4.gif";
	
	var h2 = document.createElement("h2");
		h2.innerText = "Space Ranger";
	startGameBlock.appendChild(h2);
	
	// добавляем кнопку в стартовый блок
	startGameBlock.appendChild(startGameButton);

	// добавляем стартовый блок в игровое поле
	gameAreaBlock.appendChild(startGameBlock);

	startGameBlock.appendChild(startGameImg);
}

// функция создания блока пройденного пути и добавление его в игровое поле
 function createDistanseTraveledBlock() {
    
// создаём блок id="distance_traveled_block"
 		// в коробочку distance добавляем тег span
 		distanceTraveledBlock = document.createElement("span");
 		// прописываем span id="distance_traveled_block" и текст "0 km"
 		distanceTraveledBlock.id = "distance_traveled_block";
 		distanceTraveledBlock.innerText = dictance + " km";
 	// добавляем блок пройденного пути в игровое поле
 	gameAreaBlock.appendChild(distanceTraveledBlock); 	
}

//Создание блока игрового времени
//<div id="countdown_block">Time:<span id ="timer">10</span></div>
function creatСountdownBlock() {
  countdownBlock = document.createElement("div");

  countdownBlock.id = "countdown_block";

  countdownBlockSpan = document.createElement("span");

  countdownBlockSpan.id = "timer";

  	// візуалізайція початкового часу
  	var minutes = Math.floor(startTimeGame / 60);
	var seconds = startTimeGame - minutes * 60;

	if (minutes < 10) {
		countdownBlock.innerText = "Time: 0" + minutes + ":" + seconds;
		if (seconds < 10) {
			countdownBlock.innerText = "Time: 0" + minutes + ":0" + seconds;	
		}
	}

  countdownBlock.appendChild(countdownBlockSpan);

  gameAreaBlock.appendChild(countdownBlock);
}

/*=============
Создание блока конца игры
<div id="the_end_game_block">
	 	<h2>Игра окончена</h2>
		<h3>Вы набрали: 100 очков</h3>
		<button  id="start_again">Start again</button></div>
</div
===============*/

function createTheEndGameBlock() {
  theEndGameBlock = document.createElement("div");

  theEndGameBlock.id = "the_end_game_block";

  var h2 = document.createElement("h2");

  h2.innerText = "Игра окончена!";

  var h3 = document.createElement("h3");

  h3.innerText = "Вы пройшли: " + distanceTraveledBlock.innerText; // 1000 це distance_traveled_block.innerText лічильника пройденної відстані

  startButton = document.createElement("button");

  startButton.id = "start_again";

  startButton.innerText = "Start again";

  theEndGameBlock.appendChild(h2);

  theEndGameBlock.appendChild(h3);

  theEndGameBlock.appendChild(startButton);

  gameAreaBlock.appendChild(theEndGameBlock);

  var theEndGameImg = document.createElement("img");
  theEndGameImg.src = "img/4.gif";
  theEndGameBlock.appendChild(theEndGameImg);
}

/*
 <div id="number_of_lives_block">
	<span></span>
	<span></span>
	<span></span>
</div>
*/
function createNumberOfLivesBlock() {
	// в змінній lifes створюємо елемент div з id = "lifes"
	numberOfLivesBlock = document.createElement("div");
	numberOfLivesBlock.id = "number_of_lives_block";
	// початкова кількість життів
	var startLives = 0;
	// створюємо змінні для життів поки не достигне заданої кількості
	while (startLives < all_Lives) {
		// створюємо змінні для життів 
		var health = document.createElement ("span");
		// додоємо життя на поле
		numberOfLivesBlock.appendChild(health);
		// збільшуємо наявну кількість життів на полі на 1
		startLives = startLives + 1;
	}
	// добавляємо поле з життями на ігрове поле
	gameAreaBlock.appendChild(numberOfLivesBlock);
}

// Функція створення блоку корабля
function createSpaceshipBlock() {
	spaceshipBlock = document.createElement("div");
	spaceshipBlock.id = "spaceship";
	
	var spaceshipImg = document.createElement("img");
	spaceshipImg.src = "img/sprite-removebg-preview.png";
	spaceshipBlock.appendChild(spaceshipImg);
	gameAreaBlock.appendChild(spaceshipBlock);

} 

// створення блоку космічних перешкод
function creaateObstaclesBlok() {
	obstaclesBlok = document.createElement("div");
	obstaclesBlok.className = "obstacles";
	// рандомний розмір перешкоди
	randSizeObstaclesBlok();
	// рандомне положення по горизонталі враховуючи ширину перешкоди
	obstaclesBlok.style.left = getRandomInRange(0, (750 - width)) + "px";
	// падіння перешкоди
	fallingObstacles();
	// добавляєсо перешкоду на ігрове поле
	gameAreaBlock.appendChild(obstaclesBlok);
}

/*======================
	Видалення елементів
========================*/

// Функция удаления стартового блока
function deleteStarGametBlock() {
 		// удаляем выбраный блок
		startGameBlock.remove();
		//очищаем игровое поле
		gameAreaBlock.innerText = "";
}

// Функция удаления блока пройденного пути
function deleteDistanseBlock() {
	// удаляем блок пройденного пути
	distanceTraveledBlock.remove();
}

// удаляем блок счетчика игры
function deleteCountdownBlock() {
  //удалить блок игрового времени
  countdownBlock.remove();
}


// удаляем конца игры
function deleteTheEndGameBlock() {
  //удалить выбранный элемент
  theEndGameBlock.remove();
}

// видалення блоку з життями
function deleteNumberOfLivesBlock(){
	numberOfLivesBlock.remove();
}

// видалення блоку космічного корабля
function deleteSpaceshipBlock() {
	spaceshipBlock.remove();
} 

// видалення блоку космычних перешкод
function deleteObstaclesBlok() {
	obstaclesBlok.remove();
}