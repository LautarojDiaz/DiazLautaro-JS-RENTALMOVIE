
/* CAPTURAS DE ENTRADAS INGRESADAS POR EL USUARIO */
/* NOTIFICACION DE RESULTADOS EN FORMA DE SALIDA */
function capturar(){
    //console.log("capturando");
    function USUARIO(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    // console.log(nombreCapturar);
    var apellidoCapturar = document.getElementById("apellido").value;
    // console.log(apellidoCapturar);
    var edadCapturar = document.getElementById("edad").value;
    // console.log(edadCapturar);
    nuevoSujeto = new USUARIO(nombreCapturar,apellidoCapturar,edadCapturar);
    console.log(nuevoSujeto);
    agregar();

 }

 var baseDatos= [];
 function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.apellido+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
 };


