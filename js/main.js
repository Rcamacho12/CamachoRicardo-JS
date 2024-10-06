// Cargar los productos desde el archivo JSON utilizando async/await
async function cargarProductos() {
    try {
        const response = await fetch('./Json/productos.json');
        const productos = await response.json();

        // Validación de programación defensiva
        if (Array.isArray(productos) && productos.length > 0) {
            cargarProductosEnDOM(productos);
        } else {
            console.error('No se encontraron productos válidos en el archivo JSON.');
        }
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

cargarProductos(); // Llamada a la función

// Cargar productos en el DOM
function cargarProductosEnDOM(productos) {
    const contenedorProductos = document.getElementById('contenedorProductos');
    contenedorProductos.innerHTML = '';

    productos.forEach(({ imagen, nombre, precio, id }) => {
        const div = document.createElement('div');
        div.classList.add('col-md-3', 'mb-3'); // Aplicar las clases para los estilos

        div.innerHTML = `
            <div class="card" style="width: 14rem">
                <img src="${imagen}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">$${precio}.</p>
                    <a href="#" class="btn btn-primary agregar-carrito" data-id="${id}">Agregar al carrito</a>
                </div>
            </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar(productos);  
}

// Actualizar botones para agregar al carrito
function actualizarBotonesAgregar(productos) {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');

    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            const idProducto = boton.getAttribute('data-id');
            const producto = productos.find((prod) => prod.id === parseInt(idProducto));

            producto ? agregarAlCarrito(producto) : console.error('Producto no encontrado.');
        });
    });
}

// Agregar productos al carrito
function agregarAlCarrito(producto) {
    const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = productosEnCarrito.find(p => p.id === producto.id);

    productoExistente 
        ? productoExistente.cantidad++  // Si el producto ya existe en el carrito, incrementar cantidad
        : productosEnCarrito.push({ ...producto, cantidad: 1 });  // Si es nuevo, agregarlo con cantidad 1

    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    renderCarrito();
}

// Renderizar el carrito en el DOM
function renderCarrito() {
    const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.getElementById('contenedorCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    let total = 0;

    contenedorCarrito.innerHTML = ''; // Limpiar el carrito

    productosEnCarrito.forEach(({ imagen, nombre, precio, cantidad }, index) => {
        const precioTotalProducto = precio * cantidad;
        total += precioTotalProducto;

        contenedorCarrito.innerHTML += `
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src="${imagen}" class="img-fluid rounded-3" alt="${nombre}">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">${nombre}</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <input class="form-control form-control-sm" type="number" value="${cantidad}" min="1" data-index="${index}" onchange="actualizarCantidad(event)">
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0">$${precioTotalProducto.toLocaleString()}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <button class="btn btn-link px-2 text-danger" onclick="eliminarProducto(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    totalCarrito.innerText = `Total: $${total.toLocaleString()}`;
}

// Actualizar cantidad de productos en el carrito
function actualizarCantidad(event) {
    const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = event.target.getAttribute('data-index');
    const nuevaCantidad = parseInt(event.target.value);

    if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
        alert('La cantidad debe ser un número mayor a 0');
        return;
    }

    productosEnCarrito[index].cantidad = nuevaCantidad;

    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    renderCarrito();
}

// Eliminar un producto del carrito
function eliminarProducto(index) {
    const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    productosEnCarrito.splice(index, 1);

    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    renderCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Eliminarás todos los productos del carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('carrito');
            renderCarrito();
            Swal.fire('Eliminado', 'Todos los productos han sido eliminados del carrito.', 'success');
        }
    });
}

document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);
