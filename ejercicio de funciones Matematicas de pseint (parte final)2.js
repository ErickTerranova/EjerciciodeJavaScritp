function principal() {
	var a = new Number();
	var b = new Number();
	var resultado = new Boolean();
	document.write("Digite el valr de A: ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valr de b: ",'<BR/>');
	b = Number(prompt());
	resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b);
	document.write("El resultado es: ",resultado,'<BR/>');
}

