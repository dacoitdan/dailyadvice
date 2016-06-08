var date = new Date();
var day = date.getDay();
var hours = date.getHours();
var month = date.getMonth();

var dayOfWeek;
var time;
var season;
var season2;

if (day < 5) {
	dayOfWeek = 'It\'s a weekday.';
} else if (day === 5) {
	dayOfWeek = 'It\'s almost the weekend!';
} else {
	dayOfWeek = 'Enjoy the weekend!';
}

if (hours >= 22 && hours < 5){
	time = 'It\'s getting late. Get some sleep.';
} else if (hours >=5 && hours <12) {
	time = 'Good morning!';
} else if (hours >=12 && hours < 22) {
	time = 'Hope you are having a good day!';
}

if (month >=6 && month <= 9){
	season2 = 'Soak up that sun!';
	if (hours >=14 &&)
		season = 'It gets hot in the afternoon - don\'t forget to hydrate!';
	} else {
		season = 'Enjoy your summer, but don\'t forget sunscreen!';
	}
} else if (month >= 3 && month <=6) {
	season2 = 'Enjoy the warm weather!';
	if (hours >= 6 && hours <= 12 ) {
		season = 'What a beautiful spring morning!';
	} else {
		season = 'Watch out for that pollen!';
	}
} else if (month >= 9 && month <=12){
	season2 = 'Don\'t forget to stay warm!';
	if (hours >= 5 && hours <=8 ) {
		season = 'It\'ll be getting dark soon!';
	} else {
		season = 'Ah, the colors are a\'changin...';
	}
} else if (month >= 12 && month <=3){
	season2 = 'Stay warm!';
	if (hours >= 8 && hours <= 2 ) {
		season = 'Don\'t forget to let your taps drip before you sleep!';
	} else (month >= 12 && month <=3) {
		season = 'Bundle up before you head out!';
	}
}

console.log('Hello! Here is some advice for the day:\n' + dayOfWeek + ' ' + time + '\n' + season + '\n' + season2);
