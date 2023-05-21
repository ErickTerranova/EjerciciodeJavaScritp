// Ejercicio2: Hacer un programa para ingresar el radio de un circulo y se 
// reporte su area y la longitud de la circunferencia.
// area = pi * radio^2                          
// Longitud = 2 * pi * radio
function ejercicio2() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("Digite el valor del radio",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*radio*radio;
	lon = 2*Math.PI*radio;
	document.write("eel area de la circunferencia es: ",area,'<BR/>');
	document.write("La longitud es: ",lon,'<BR/>');
}

