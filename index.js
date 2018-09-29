let rl = require('readline-sync');
let continuePlaying = '0';
let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'white'];
console.log(`The hardest & stupid console game ever. Try to guess PC favourite colors. The PC knows the following colors: ${colors.join(', ')}.`);
do {
	let userColors = [
		rl.question('Guess my first color: '),
		rl.question('Guess my second color: ')
	];
	if (colors.includes(userColors[0]) && colors.includes(userColors[1])){
		let opponnentColors = [
			colors[Math.floor(Math.random() * colors.length)],
			colors[Math.floor(Math.random() * colors.length)],
		];
		if (opponnentColors === userColors) {
			console.log('You are the Nostradamus!!!');
		} else if (opponnentColors.includes(userColors[0]) || opponnentColors.includes(userColors[1])) {
			let colorNumber = rl.question('You just guess one color! For the win you need to guess the number. (first(0), second(1)): ');
			if (opponnentColors.includes(userColors[colorNumber])) {
				console.log('You win!');
			} else {
				console.log(`You lose! My colors was: ${opponnentColors.join(', ')}`);
			}
		} else {
			console.log(`You are the fool! My colors was: ${opponnentColors.join(', ')}`);
		}
		continuePlaying = rl.question('Continue playing? (yes(0), no(1)): ');
	} else {
		console.log('Wrong color. Try again.');
	}
} while (continuePlaying === '0');
console.log('Goodbye! Thanks for playing!');