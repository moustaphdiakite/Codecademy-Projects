/* Nonsensical Jokes Generator */

const messageComponent = {
	title: ["Mr", "Mrs", "Miss", "Master", "Sir", "Dr", "Ms", "Lord"],
	name: [
		"Smith",
		"Jones",
		"Brown",
		"Walker",
		"Moustaph",
		"Terry",
		"Thomas",
		"Jason",
		"Barbara",
		"David",
		"Ely",
		"Michel",
		"Edou",
		"Yaya",
	],
	verb: [
		"likes",
		"hates",
		"eats",
		"throws",
		"rides",
		"cries",
		"dances",
		"applauds",
		"yells",
		"sleeps",
		"spits",
		"kisses",
		"reads",
		"jumps",
		"manages",
		"runs",
		"studies",
	],
	adjective: [
		"fat",
		"thin",
		"ugly",
		"pretty",
		"jumping",
		"crawling",
		"stupid",
		"imperfect",
		"magnificent",
		"rich",
		"gullible",
		"capricious",
		"ubiquitous",
		"enormous",
		"excited",
		"flawless",
		"sturdy",
	],
	color: [
		"red",
		"green",
		"black",
		"yellow",
		"orange",
		"purple",
		"pink",
		"blue",
		"cyan",
		"white",
	],
	noun: [
		"cats",
		"dogs",
		"rabbits",
		"monkeys",
		"trucks",
		"cars",
		"Lambo",
		"computer",
		"school",
		"president",
		"bike",
		"banana",
		"crocodile",
		"bird",
		"king",
		"queen",
		"phone",
		"tablet",
	],
	time: [
		"on sundays",
		"for breakfast",
		"at night",
		"in the morning",
		"in the afternoon",
		"early in the morning",
		"in the afternoon",
		"on mondays",
		"on tuesdays",
		"on wednesdays",
		"on saturdays",
		"on thrusdays",
		"in the winter",
		"in the summer",
		"in the fall",
	],
};

const messageGenerator = () => {
	let message = "";

	for (let key in messageComponent) {
		const currentArray = messageComponent[key];
		message += `${currentArray[randomIndexGenerator(currentArray)]} `;
	}
	message = message.trim();
	message += ".";
	console.log(message);
	return message;
};

function randomIndexGenerator(arr) {
	const arrLength = arr.length;
	return Math.floor(Math.random() * arrLength);
}

messageGenerator();
