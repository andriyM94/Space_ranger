/*
	Файл для функцій гри
*/

// функція для отримання рандомного цілого числа
function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Рандомні розміри перешкод
function randSizeObstaclesBlok() {
	width = getRandomInRange(150, 300);
	obstaclesBlok.style.width = width + "px";
	obstaclesBlok.style.height = getRandomInRange(100, 150) + "px";
}

// Функция счётчика километров
function tripСounter() {
	// функция увеличения пройденного пути на  10 км каждую секунду
	distanceTraveledTimer = setInterval(function() {
		// увеличиваем счётчик на 1 км
		dictance = dictance + 1;
		//выводим значнеие пройденного пути на игровое поле
		distanceTraveledBlock.innerText = dictance + " km";
	}, 100);
}

// timerGame - функція зворотнього відліку гри
function timerGame() {
	// задаємо початкове значення часу зворотнього відліку
	countdownBlockSpan.innerText = startTimeGame;
	// приховуємо спан з початковим часом відліку
	countdownBlockSpan.style.display = "none";
	// запускаємо таймер зворотнього відліку
  	clockTimerGame = setInterval(function () {
  	// зменшуємо час на 1 секунду
    countdownBlockSpan.innerText = countdownBlockSpan.innerText  - 1;

    // функция визуализации таймера
    timerVisual();

    // если таймер игры = 0 то очистить таймер и конец игры
    if (countdownBlockSpan.innerText == 0) {
      // видаляємо таймер
      clearInterval(clockTimerGame);
      //встановлюємо початкову кільккість життів
      all_Lives = lives;
      // закінчуємо гру
      theEndGame();
    }
  }, 1000);
}
// функція візуалізації таймера зворотнього відліку гри
function timerVisual() {
	var minutes = Math.floor(countdownBlockSpan.innerText / 60);
	var seconds = countdownBlockSpan.innerText - minutes * 60;

	if (minutes < 10) {
		countdownBlock.innerText = "Time: 0" + minutes + ":" + seconds;
		if (seconds < 10) {
			countdownBlock.innerText = "Time: 0" + minutes + ":0" + seconds;	
		}
	}
	// если значение времени таймера меньше 4
	if (countdownBlockSpan.innerText < 4) {
	// цвет таймера красный
	countdownBlock.style.color = "red";
	}
}
// функція яка виконує падіння перешкод і коли перешкода виходить за поле сторюється нова перешкода 
// також перевіряється чи відбулося зіткнення з кораблем
function fallingObstacles() {
	
	var timerObstacles = setInterval( function() {
		// прибавление  1px Top позиции препятствия от offsetTop
		obstaclesBlok.style.top = obstaclesBlok.offsetTop + 1 +"px";
		// если препятствие выходит за пределы игрового поля
		if(obstaclesBlok.offsetTop > 500) {
			// удалить препятствие
			deleteObstaclesBlok();				
			// зново создать препятствие
			creaateObstaclesBlok();
			// очистить таймер
			clearInterval(timerObstacles);
		}

		// Перевыряємо чи верхня грань корабля лежить в межах ширини перешкоди
		if ((spaceshipBlock.offsetLeft >= (obstaclesBlok.offsetLeft - spaceshipBlock.offsetWidth + 5)) 
			&& (spaceshipBlock.offsetLeft <= (obstaclesBlok.offsetLeft + obstaclesBlok.offsetWidth - 5)) )  {
			// Перевыряємо чи корабель по висоті затрагує перешкоду			
			if ( (spaceshipBlock.offsetTop < (obstaclesBlok.offsetTop + obstaclesBlok.offsetHeight - 5)) 
				&& (spaceshipBlock.offsetTop >= (obstaclesBlok.offsetTop - spaceshipBlock.offsetHeight -5)) ) {
				// видаляємо перешкоду
				deleteObstaclesBlok();
				// відаляємо блок з життями
				deleteNumberOfLivesBlock();
				// зменшуємо кількість життів
				all_Lives = all_Lives - 1;
				// перевіряємо чи не закінчилися наші життя
				// якщо закінчилися то визиваємо функцію кінця гри
				if (all_Lives == 0) {
					all_Lives = lives;
					theEndGame();
				} else {							
					// створюємо новий блок життів з новою кількістю
					createNumberOfLivesBlock();				
					// знову создать препятствие
					creaateObstaclesBlok();
					// очистить таймер
					clearInterval(timerObstacles);
				}
			}	
		}
	}, i);
}

// функція для руху корабля
function motionSpaceshipBlock() {
	// відслідковування натискання кнопки і переміщення корабля
	window.onkeydown = function (event) {
	    var code = event.which;
	    if (code != 37 && code != 39 &&code != 38 && code != 40 ){
	        return;
	    } else {
	    	// змінюємо координати корабля в залежності від натиснутої кнопки
	    	var prop = document.getElementById('spaceship');
	    	if ( (code == 37) && (prop.offsetLeft >= 10) ) {
	    		prop.style.left = prop.offsetLeft - 15 + 'px';
	   		}
	   		if ( (code == 39)  && (prop.offsetLeft <= 665) ) {
	    		prop.style.left = prop.offsetLeft + 15 + 'px';
	    	}
	    	if ( (code == 38)  && (prop.offsetTop >= 100)) {
	    		prop.style.top = prop.offsetTop - 20 + 'px';
	    	}        
	    	if ( (code == 40) && (prop.offsetTop <= 350) ) {
	    		prop.style.top = prop.offsetTop + 20 + 'px';
	    	}     
	    } 
	};

}
