function exercise() {
	let numberExercise = parseInt(document.getElementById("numberExercise").value);
	let numberN = parseInt(document.getElementById("valueN").value);
	let resul;

	if(!isNaN(numberN)){
		switch (numberExercise) {
		  case 1:
		    resul =  prime(numberN);
		    break;
		  case 2:
				resul = fibonacci(numberN);
		    break;
		  case 3:
				resul= summation(numberN);
		    break;
		  default:
		    alert(`Lo sentimos, el numero ${numberExercise} no es un ejercicio.`);
		}

		alert(`Los resultados para el ejercicio ${numberExercise} son:  \n ${resul}`);

	}else{
		alert('Lo sentimos, falto darle valor a N.');
	}

	document.getElementById("numberExercise").value = "";
	document.getElementById("valueN").value = "";
}

function prime(numberN) {
	let arrPrimes = [];

	for (let i = 0; i <= numberN; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (i > 1 && isPrime == true) {
       arrPrimes.push(i);
    }
	}

	return arrPrimes.toString();
}


function fibonacci(numberN) {
	let arrFibonacci = [];
	let a = 0;
	let b = 1;
	let c = 0;

	for (let i = 0; i < numberN; i++) {
		a = b;
		b = c;
		arrFibonacci.push(c);
		c = a + b;

	}

	return arrFibonacci.toString();
}

function summation(numberN) {
	let sum = 0;

	for (let i = 0; i <= numberN; i++) {
		sum += i ** numberN;
	}

	return sum;
}
