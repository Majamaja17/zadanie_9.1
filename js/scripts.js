var a = prompt("Podaj a");
var b = prompt("Podaj b");
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
	document.write("wynik dodatni");
} else if (value < 0) {
	document.write("wynik ujemny");
} else if (isNaN(value)) {
	document.write("wynik jest NaN");
} else {
	document.write("wynik jest równy zero");
}
