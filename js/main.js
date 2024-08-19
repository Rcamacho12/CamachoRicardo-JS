function saludarUsuario(nombre) {
    alert("¡Bienvenido, " + nombre + "!");
}

function categoriaProducto() {
    let mensaje = "Selecciona un producto ingresando el número correspondiente:\n";
        mensaje += "1. Libros\n";
        mensaje += "2. Articulos de libreria\n";
        mensaje += "3. Salir\n";
    let seleccion;
    let productoSeleccionado;
        while (true) {
            seleccion = prompt(mensaje);
            if (seleccion === "1") {
                productoSeleccionado = "Libros";
                break;
            } else if (seleccion === "2") {
                productoSeleccionado = "Articulos de Libreria";
                break;
            } else if (seleccion === "3") {
                    productoSeleccionado = "Salir";
                    break;
            } else {
                alert("Selección no válida. Por favor, intenta de nuevo.");
                break;
            }
        }
    alert("Has seleccionado: " + productoSeleccionado);
}

let nombreUsuario = prompt("por favor, ingresa tu nombre: ");

saludarUsuario(nombreUsuario);
categoriaProducto();