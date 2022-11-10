/** Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario. */

function tabla_multiplicar(num) {
    var total
    for(let i = 1; i <= 10; i++){
        total = num * i
        console.log(num + "X" + i + "=" + total);
    } 
};

tabla_multiplicar(5)