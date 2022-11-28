/* ALGORISMO CON UN CONDICIONAL */

let nombre = prompt("Ingrese su nombre")
    if (nombre == ""){
        alert("No ingreso su nombre")
    }
    else{
        alert("Bienvenido" + " " + nombre)
    }
console.log ("Bienvenido" + " " + nombre) 




/* ALGORISMO UTILIZANDO UN CICLO (FOR Y WHILE) */
    
    /* FOR */
for (let numero= 1; numero<=6; numero++){
    if(numero == 5){
        break;
    }
    alert(numero)
    console.log(numero)
}
  


  /* WHILE */
 let numero = 0;
while (numero < 10){
    console.log (numero);
    numero = numero + 1;
}




/* SIMULADOR INTERACTIVO */

const pelicula = 3;

let montoIngresado = prompt("Cada alquiler de peliculas tiene un costa base de $ " + pelicula + " por día");

let totalDolares =  Number(montoIngresado) * pelicula;

console.log( "Cada alquiler de peliculas tiene un costa base de $ " + parseFloat(totalDolares).toFixed(2) + " por día");


