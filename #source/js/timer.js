// Устанавливаем время для обратного отсчета
var countDownDate = new Date("August 31, 2020 23:59:59").getTime();
//Обновляем таймер каждую секунду 
var countDownFunction = setInterval(function () {
	// Время на данный момент
	var now = new Date().getTime();
	// Вычисляем промежуток времени 
	var distance = countDownDate - now;
	//Высчитываем время для дней, часов, минут, секунд
	var days = Math.floor(distance/(1000*60*60*24));
	var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
	var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
	var seconds = Math.floor((distance%(1000*60))/1000);

	document.getElementById("timer").innerHTML = 
	days + ":" + hours + ":" + minutes + ":" + seconds;
	document.getElementById("timer1").innerHTML = 
	days + ":" + hours + ":" + minutes + ":" + seconds;
	document.getElementById("timer2").innerHTML = 
	days + ":" + hours + ":" + minutes + ":" + seconds;
	document.getElementById("timer3").innerHTML = 
	days + ":" + hours + ":" + minutes + ":" + seconds;
});
