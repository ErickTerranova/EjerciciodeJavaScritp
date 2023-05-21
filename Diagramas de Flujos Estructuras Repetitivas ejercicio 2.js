// Ejercicio 1: Calcular la suma de los "N" primeros numeros.
function ejercicio1() {
	var i, suma;
	var n = new Number();
	document.write("Digite la cantidad de numeros a sumarse: ",'<BR/>');
	n = Number(prompt());
	suma = 0;
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	document.write("La suma es: ",suma,'<BR/>');
}

