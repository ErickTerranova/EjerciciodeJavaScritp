// Ejercicio 4: Leer 2 nunmeros; si son iguales que los multiplique, si el 
// primero es mayor que el segundo que los reste y si no que los sume
function ejercicio4() {
	var num;
	var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("Digite dos numeros: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		// Si son iguales multiplicamos 
		resultado = num*num2;
	} else {
		if (num1>num2) {
			// Si el primer numero es mayor los restamos
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	document.write("El resultado es: ",resultado,'<BR/>');
}

