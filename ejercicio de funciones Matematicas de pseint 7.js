// Funciones Matematicas 
function principal() {
	var num = new Number();
	var resultado = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num = Number(prompt());
	resultado = Math.tan(num);
	document.write("El resultado es: ",resultado,'<BR/>');
}

