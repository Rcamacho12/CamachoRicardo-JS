
const productos = [
    { id: 1, nombre: "cuaderno tapa blanda", precio: 12950, imagen: "./assets/img/cuadernoTapaDura.webp" },
    { id: 2, nombre: "cuaderno ejecutivo", precio: 13400, imagen: "./assets/img/cuadernoexecutive.webp"},
    { id: 3, nombre: "cuaderno Univercitario", precio: 18000, imagen: "./assets/img/cuadernoUniversitario1.webp"},
    { id: 4, nombre: "cuaderno tapa flexible", precio: 3750, imagen: "./assets/img/cuadernoTapaFlexible.webp"},
    { id: 5, nombre: "cuaderno tapa plastica", precio: 7500, imagen: "./assets/img/cuadernoTapaPlastica.webp"},
    { id: 6, nombre: "cuaderno escolar", precio: 3750, imagen: "./assets/img/cuadernoEscolar.webp"},
    { id: 7, nombre: "cuaderno escolar con lunares", precio: 3750, imagen: "./assets/img/cuadernoLunares.jpg"},
    { id: 8, nombre: "cuaderno ecologico" , precio: 7250, imagen: "./assets/img/cuadernoEcologico.webp"}
];

const contenedorProductos = document.getElementById('contenedorProductos');
const botonCarrito = document.getElementById('botonCarrito');
const productosEnCarrito = [];
function cargarProductos() {

    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
console.log()
        const div = document.createElement("div");

        div.innerHTML = `

                <div  class="col-md-3 mb-3">
                    <div class="card" style="width: 14rem">
                        <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
                        <div  class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$${producto.precio}.</p>
                            <a href="#" id="botonCarrito"class="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

// Llamamos a la función para cargar los productos
cargarProductos();

function actualizarBotonesAgregar() {
    // Selecciona todos los botones que tienen el id 'botonCarrito'
    const botonesAgregar = document.querySelectorAll('#botonCarrito');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            const card = boton.closest('.card');  
            const nombreProducto = card.querySelector('.card-title').textContent; 
            const producto = productos.find(prod => prod.nombre === nombreProducto); 
            if (producto) {
                console.log("Producto agregado al carrito:", producto);
                // Aquí podrías agregar el producto al carrito
            }
        });
    });
}

