// Ejercicios 4:Un profesor prepara tres cuestionarios para una evaluacion final:
// A,B,C. Se sabe que se tarda 5 minutos en revisar el cuestionario, A 
// 8 en revisar el cuestonario B y 6 en el C. la cantidad de examenes de cada 
// tipo se entran por teclado. �cuantas horas y cuantos minutos se tardara en 
// revisar todas las evaluaciones?
function ejercicio4() {
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("Digite la cantidad de cuestonarios A: ",'<BR/>');
	cantidada = Number(prompt());
	document.write("Digite la cantidad de cuestonarios B: ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("Digite la cantidad de cuestonarios C: ",'<BR/>');
	cantidadc = Number(prompt());
	// calcular los minutos que se tardaea por cada cuestonarios
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// Calcular el tiempo total que le toma revisar todos los cuestonarios 
	tiempo_total = tiempoa+tiempob+tiempoc;
	// Calculamos las horas y minutos 
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("Se tardara ",horas,"horas y ",minutos,"minutos",'<BR/>');
}

