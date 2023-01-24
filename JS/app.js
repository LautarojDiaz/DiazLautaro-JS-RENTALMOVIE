
const productosStr = '[\
    {\
        "id": "1",\
        "nombre": "AVATAR",\
        "imagen": "MULTIMEDIA/avatar.png",\
        "precio": 1600\
    },\
    {\
        "id": "2",\
        "nombre": "TOPGUN",\
        "imagen": "MULTIMEDIA/topgun.jpg",\
        "precio": 1500\
    },\
    {\
        "id": "3",\
        "nombre": "VOLVER AL FUTURO",\
        "imagen": "MULTIMEDIA/volveralfuturo.jpg",\
        "precio": 1100\
    },\
    {\
        "id": "4",\
        "nombre": "BLACK ADAM",\
        "imagen": "MULTIMEDIA/blackadam.jpg",\
        "precio": 1200\
    },\
    {\
        "id": "05",\
        "nombre": "HASTA EL ULTIMO HOMBRE",\
        "imagen": "MULTIMEDIA/ultimohombre.jpg",\
        "precio": 1000\
    },\
    {\
        "id": "6",\
        "nombre": "FORREST GUMP",\
        "imagen": "MULTIMEDIA/gump.jpg",\
        "precio": 1300\
    },\
    {\
        "id": "7",\
        "nombre": "VENOM",\
        "imagen": "MULTIMEDIA/venom.jpg",\
        "precio": 500\
    },\
    {\
        "id": "8",\
        "nombre": "GIGANTES DE ACERO",\
        "imagen": "MULTIMEDIA/ACERO.jpg",\
        "precio": 1150\
    }\
]';


let productosEnCarrito = [];
const contenedorIndu = document.querySelector("#contenedor-indu");
const contadorCarrito = document.querySelector("#contador-carrito");
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


var productos = JSON.parse(productosStr);


function mostrarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.classList.add("col-lg-3");
        div.innerHTML = `
            <div class="card shadow card-indu">
                <img src="${producto.imagen}" class="card-img-top img-indu" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title titulo-indu">${producto.nombre}</h5>
                    <p class="precio-indu">$${producto.precio}</p>
                    <button class="btn-card boton-agregar-indu" id="${producto.id}"><span>BUY</span></button>
                </div>
            </div>
        `;
        contenedorIndu.append(div);
    });
};


function agregarProdAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregar = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const i = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[i].cantidad++;

    } else {
        productoAgregar.cantidad = 1;
        productosEnCarrito.push(productoAgregar);
    }

    actualizarContadorCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarContadorCarrito() {
    let contador = productosEnCarrito.reduce((acu, producto) => acu + producto.cantidad, 0);
    contadorCarrito.innerHTML = contador;
};


/**************************************************************/
mostrarProductos();
const botonesAgregar = document.querySelectorAll(".boton-agregar-indu");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarContadorCarrito();
} else {
    productosEnCarrito = [];
}

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarProdAlCarrito);
});

