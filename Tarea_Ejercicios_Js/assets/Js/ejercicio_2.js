/* En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:
Precio - Impuesto

$ 0.00 - $ 20.00
No genera impuesto.

$ 20.01 - $ 40.00
30 %

$ 40.01 - $ 500.00
40 %

$ 500.01 en adelante
50 % */

var precio = 12

if(precio >= 0 & precio < 20) {
    console.log("No genera impuesto");
} else if(precio > 20 & precio < 40) {
    console.log("Genera un impuesto del 30%");
} else if(precio > 40 & precio < 500) {
    console.log("Genera un impuesto del 40%");
} else if(precio > 500) {
    console.log("Genera un impuesto del 50%");
}