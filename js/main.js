
const articuloLibreria = [
    { id: 1, nombre: "cuaderno tapa blanda", precio: 12950, imagen: "./assets/img/cuadernoTapaDura.webp" },
    { id: 2, nombre: "cuaderno ejecutivo", precio: 13400, imagen: "./assets/img/cuadernoexecutive.webp"},
    { id: 3, nombre: "cuaderno Univercitario", precio: 18000, imagen: "./assets/img/cuadernoUniversitario1.webp"},
    { id: 4, nombre: "cuaderno tapa flexible", precio: 3750, imagen: "./assets/img/cuadernoTapaFlexible.webp"},
    { id: 5, nombre: "cuaderno tapa plastica", precio: 7500, imagen: "./assets/img/cuadernoTapaPlastica.webp"},
    { id: 6, nombre: "cuaderno escolar", precio: 3750, imagen: "./assets/img/cuadernoEscolar.webp"},
    { id: 7, nombre: "cuaderno escolar con lunares", precio: 3750, imagen: "./assets/img/cuadernoLunares.jpg"},
    { id: 8, nombre: "cuaderno ecologico" , precio: 7250, imagen: "./assets/img/cuadernoEcologico.webp"}
]
function cargarProducto(articuloLibreria) {
    let contenedorProductos = document.getElementById('contenedorProductos');
    let content = '';

    articuloLibreria.map(elemento => {
        content += `
            <div  class="col-md-3 mb-3">
                <div class="card" style="width: 14rem;">
                    <img src=${elemento.imagen} class="card-img-top" alt="...">
                    <div  class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}.</p>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    contenedorProductos.innerHTML = content;
}

// Llamamos a la función para cargar los productos
cargarProducto();



