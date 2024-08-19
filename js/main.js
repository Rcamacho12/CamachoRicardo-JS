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
                categoriaLibros();
                break;
            } else if (seleccion === "2") {
                categoriaArticulosLibreria();
                break;
            } else if (seleccion === "3") {
                    productoSeleccionado = "Salir";
                    break;
            } else {
                alert("Selección no válida. Por favor, intenta de nuevo.");
                break;
            }
        }
}
function categoriaArticulosLibreria() {
    let mensaje = "Elegi el Articulo de libreria que estas buscando:\n";
        mensaje += "1. Cuadernos\n";
        mensaje += "2. lapiceras\n";
        mensaje += "3. Salir\n";
    let seleccion;
    let productoSeleccionado;
        while (true) {
            seleccion = prompt(mensaje);
            if (seleccion === "1") {
                productoSeleccionado = "Cuadernos";
                break;
            } else if (seleccion === "2") {
                productoSeleccionado = "Lapiceras";
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
function categoriaLibros() {
    let mensaje = "Elegi el Libro que estas buscando:\n";
        mensaje += "1. El Principito\n";
        mensaje += "2. Rayuela\n";
        mensaje += "3. Salir\n";
    let seleccion;
    let productoSeleccionado;
        while (true) {
            seleccion = prompt(mensaje);
            if (seleccion === "1") {
                productoSeleccionado = "El Principito";
                break;
            } else if (seleccion === "2") {
                productoSeleccionado = "Rayuela";
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
