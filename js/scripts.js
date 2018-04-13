var a = prompt("Podaj a");
var h = prompt("Podaj h");

function getTriangleArea(a, h) {
	if (a < 0) && (h < 0) {
		document.write("Nieprawidłowe dane");
	} else if (a > 0) || (h > 0) {
		return getArea (a*h/2);
	}
}

console.log(getTriangleArea(10, 6));