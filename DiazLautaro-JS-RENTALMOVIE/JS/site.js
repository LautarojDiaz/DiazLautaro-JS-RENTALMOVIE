/* SEGUNDO TP JS*/

/* DIFERENTES TIPOS DE CLASES */
class Cliente {
    constructor(nombre, mail) {
        this.nombre = nombre;
        this.mail = mail;
    }
}

/* MENU UNICIO (ALERT) */
function menu() {
    alert("Bienvenido a RENTALAPLICATION");
    alert("Nos dedicamos especificamente a vender cuentas ya registradas de PlimeVideo, Dizney, HVO, Netflis");
    let opcion = parseInt(prompt("Ingrese la opción que desea: \n 1) PlimeVideo \n 2) Dizney \n 3) HVO \n 4) Netflis \n 5) Salir"));
    return opcion;    
}

    /*  */
    /*  */
    /*  */
    /*  */
    /*  */

/*OPCION 1 PLIMEVIDEO*/
function PlimeVideo() {
    alert("Usted a seleccionado PlimeVideo");
        console.log("Usted a seleccionado PlimeVideo")

    let nombre = prompt("Ingrese su Nombre y Apellido")
    if (nombre == ""){
        alert("No ingreso su nombre")
    }
    else{
        alert("Bienvenido" + " " + nombre)
    }
console.log ("Bienvenido" + " " + nombre) 

let mail = parseInt(prompt("Ingrese su mail para enviar para finalizar la compra"));
    alert("En breve le llegara su cuenta al mail");
    alert("Gracias por su compra");
    console.log("Gracias por su compra, en breve le llegara un correo electronico a su email");
   
    let cliente = new Cliente(nombre, mail);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}


/*OPCION 2 DIZNEY*/
function  Dizney() {
    alert("Usted a seleccionado Dizney");
        console.log("Usted a seleccionado Dizney")
   
    let nombre = prompt("Ingrese su Nombre y Apellido")
        if (nombre == ""){
            alert("No ingreso su nombre")
        }
        else{
            alert("Bienvenido" + " " + nombre)
        }
    console.log ("Bienvenido" + " " + nombre) 

    let mail = parseInt(prompt("Ingrese su mail para enviar para finalizar la compra"));
        if (mail == ""){
            alert("No ingreso ningun correo electronico")
        }
        else{
            alert("Espere un momento")
        }
    alert("En breve le llegara su cuenta al mail");
    alert("Gracias por su compra");
    
    console.log("Gracias por su compra, en breve le llegara un correo electronico a su email");
    let cliente = new Cliente(nombre, mail);
}


/*OPCION 3 HBO*/
function HVO() {
 alert("En este momento no tenemos stock de cuentas de HVO")
    console.log("Lo sentimos mucho, pero en este momento no tenemos stock alguno de cuentas, de HVO")
}


/*  OPCION 4 NETFLIS */
function Netflis() {
    alert("Usted a seleccionado Netflis");
        console.log("Usted a seleccionado Netfliz")

    let nombre = prompt("Ingrese su Nombre y Apellido")
        if (nombre == ""){
            alert("No ingreso su nombre")
        }
        else{
            alert("Bienvenido" + " " + nombre)
        }
    console.log ("Bienvenido" + " " + nombre) 
    
    let mail = parseInt(prompt("Ingrese su mail para enviar para finalizar la compra"));
    alert("En breve le llegara su cuenta al mail");
    alert("Gracias por su compra");
        console.log("Gracias por su compra, en breve le llegara un correo electronico a su email");
    let cliente = new Cliente(nombre, mail);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

/*OPCION 5 SALIR*/
function salir() {
    alert("Gracias por utilizar RENTALAPLICATION");
        console.log("Gracias por utilizar RENTALAPLICATION, vuelva pronto.")
}


    /*  */
    /*  */
    /*  */
    /*  */
    /*  */



/* EJECUTAR ELEMENTO SELECCIONADO */
let opcion = menu();
switch (opcion) {
    case 1:
        PlimeVideo();
        break;
    case 2:
        Dizney();
        break;
    case 3:
        HVO();
        break;
    case 4:
        Netflis();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Usted no a seleccionado ninguna opcion, precione F5 para resetar la pagina.");
        break;
}





