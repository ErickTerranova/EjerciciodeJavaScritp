// Ejercico 1: Ingrese un numero entero y reportar si es par o impar
function ejercicio1() {
	var num = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num = Number(prompt());
	if (num%2==0) {
		document.write(" El numero ",num," es par",'<BR/>');
	} else {
		document.write("El numero ",num," es impar",'<BR/>');
	}
}

