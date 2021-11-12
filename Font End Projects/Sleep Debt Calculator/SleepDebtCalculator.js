const getSleepHours = (day) => {
	day = day.toLowerCase();
	switch (day) {
		case "monday":
			return 8;
			break;
		case "tuesday":
			return 8;
			break;
		case "wednesday":
			return 8;
			break;
		case "thursday":
			return 4;
			break;
		case "friday":
			return 8;
			break;
		case "saturday":
			return 8;
			break;
		case "sunday":
			return 8;
			break;
	}
};
const getActualSleepHours = () =>
	getSleepHours("monday") +
	getSleepHours("tuesday") +
	getSleepHours("wednesday") +
	getSleepHours("thursday") +
	getSleepHours("friday") +
	getSleepHours("saturday") +
	getSleepHours("sunday");

const getIdealSleepHours = (hour = 8) => {
	return hour * 7;
};

const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours(8);

	const differenceSleepHour = actualSleepHours - idealSleepHours;

	if (differenceSleepHour === 0) {
		return "You got the perfect amount of sleep!";
	} else if (differenceSleepHour > 0) {
		return `You got more sleep than needed by ${differenceSleepHour}`;
	} else {
		return `You got less sleep than the ideal by ${differenceSleepHour}.`;
	}
};

console.log(calculateSleepDebt());
