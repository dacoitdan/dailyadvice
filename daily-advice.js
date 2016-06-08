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

if (hours >=14 && month >=6 && month <= 9){
	season = 'It gets hot in the afternoon - don\'t forget to hydrate!';
	season2 = 'Soak up that sun!';
} else if (month >= 6 && month <=9) {
	season = 'Enjoy your summer, but don\'t forget sunscreen!';
	season2 = 'Soak up that sun!';
} else if (hours >= 6 && hours <= 12 && month >= 3 && month <=6) {
	season = 'What a beautiful spring morning!';
	season2 = 'Enjoy the warm weather!';
} else if (month >= 3 && month <=6) {
	season = 'Watch out for that pollen!';
	season2 = 'Enjoy the warm weather!';
} else if (hours >= 5 && hours <=8 && month >= 9 && month <=12){
	season = 'It\'ll be getting dark soon!';
	season2 = 'Don\'t forget to stay warm!';
} else if (month >= 9 && month <=12){
	season = 'Ah, the colors are a\'changin...';
	season2 = 'Don\'t forget to stay warm!';
} else if (hours >= 8 && hours <= 2 && month >= 12 && month <=3){
	season = 'Don\'t forget to let your taps drip before you sleep!';
	season2 = 'Stay warm!';
} else if (month >= 12 && month <=3) {
	season = 'Bundle up before you head out!';
	season2 = 'Stay warm!';
}

console.log('Hello! Here is some advice for the day:\n' + dayOfWeek + ' ' + time + '\n' + season + '\n' + season2);
