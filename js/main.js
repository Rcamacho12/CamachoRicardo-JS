let productos = [];  // Definir productos como una variable global

// Fetch para cargar el archivo JSON
fetch('../Json/productos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        productos = data;  // Guardar productos en la variable global
        cargarProductos(productos);  // Llamar a cargarProductos con los datos del JSON
    })
    

function cargarProductos(productos) {
    const contenedorProductos = document.getElementById('contenedorProductos');
    contenedorProductos.innerHTML = ""; // Limpiar el contenedor

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("col-md-3", "mb-3");  // Asegúrate de que tenga clases de Bootstrap

        div.innerHTML = `
            <div class="card" style="width: 14rem">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}.</p>
                    <a href="#" class="btn btn-primary" data-id="${producto.id}">Agregar al carrito</a>
                </div>
            </div>
        `;
        
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll('.btn-primary');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            const idProducto = parseInt(boton.getAttribute('data-id')); // Usamos el data-id
            const producto = productos.find(prod => prod.id === idProducto);  // Usamos la variable global productos
            if (producto) {
                agregarAlCarrito(producto);
            }
        });
    });
}

function agregarAlCarrito(producto) {
    const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    productosEnCarrito.push(producto);
    

    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    
}
