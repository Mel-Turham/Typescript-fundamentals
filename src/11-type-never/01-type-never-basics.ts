// let someNerveValue:never = 0

type Themes = 'light' | 'dark';

function checkThemes(theme: Themes): void {
	if (theme === 'light') {
		console.log(`the theme is ${theme}`);
		return;
	} else {
		console.log(`the theme is ${theme}`);
	}
}

const printTheme = checkThemes('dark');
console.log(printTheme);

enum Color {
	Red,
	Blue,
	Green,
}

function getColorName(color: Color) {
	switch (color) {
		case Color.Red:
			return 'red';
		case Color.Blue:
			return 'blue';
		case Color.Green:
			return 'Green';
		default:
			// let unexpectedColor: never = color;
			throw new Error(`Unexpected color value ${color}`);
	}
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
