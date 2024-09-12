

class ProductoLibro {
    constructor(nombre, autor, precio) {
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
    }
}

const productoLibro1 = new ProductoLibro("El principito", "Antoine de Saint-Exupéry", 7500);
const productoLibro2 = new ProductoLibro("Harry Potter", "J.K. Rowling", 15500);
const productoLibro3 = new ProductoLibro("El señor de los anillos", "J.R.R. Tolkien", 15000);
const productoLibro4 = new ProductoLibro("Los juegos del hambre", "Suzanne Collins", 25000);

class ArticuloLibreria {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const articuloLibreria1 = new ArticuloLibreria("Cuaderno A4", 4000);
const articuloLibreria2 = new ArticuloLibreria("Cuaderno A3", 12000);
const articuloLibreria3 = new ArticuloLibreria("Lapicera Azul x12", 3600);
const articuloLibreria4 = new ArticuloLibreria("Lapicera Negra x12", 3600);

const listaArticuloLibreria = [articuloLibreria1, articuloLibreria2, articuloLibreria3, articuloLibreria4];
const listaLibros = [productoLibro1, productoLibro2, productoLibro3, productoLibro4];

// function saludarUsuario(nombre) {
//     alert("¡Bienvenido, " + nombre + "!");
// }

// function categoriaProducto() {
//     let mensaje = "Selecciona un producto ingresando el número correspondiente:\n";
//     mensaje += "1. Libros\n";
//     mensaje += "2. Artículos de librería\n";
//     let seleccion;
//     while (true) {
//         seleccion = prompt(mensaje);
//         if (seleccion === "1") {
//             categoriaLibros();
//             break;
//         } else if (seleccion === "2") {
//             categoriaArticulosLibreria();
//             break;
//         } else {
//             alert("Selección no válida. Por favor, intenta de nuevo.");
//         }
//     }
// }

// function categoriaLibros() {
//     let mensaje = "Elegi el numero del Libro que estás buscando:\n";
    
//     for (let i = 0; i < listaLibros.length; i++) {
//         mensaje += (i + 1) + ". " + listaLibros[i].nombre + "\n";
//     }
//     mensaje += (listaLibros.length + 1) + ". Salir\n";
    
//     let seleccion;
//     let productoSeleccionado;
//     while (true) {
//         seleccion = prompt(mensaje);
//         let seleccionNumero = parseInt(seleccion);
        
//         if (seleccionNumero > 0 && seleccionNumero <= listaLibros.length) {
//             productoSeleccionado = listaLibros[seleccionNumero - 1].nombre;
//             break;
//         } else if (seleccionNumero === listaLibros.length + 1) {
//             productoSeleccionado = "Salir";
//             break;
//         } else {
//             alert("Selección no válida. Por favor, intenta de nuevo.");
//         }
//     }
    
//     alert("Has seleccionado: " + productoSeleccionado);
// }

// function categoriaArticulosLibreria() {
//     let mensaje = "Elegi el numero del Artículo de librería que estás buscando:\n";
    
//     for (let i = 0; i < listaArticuloLibreria.length; i++) {
//         mensaje += (i + 1) + ". " + listaArticuloLibreria[i].nombre + "\n";
//     }
//     mensaje += (listaArticuloLibreria.length + 1) + ". Salir\n";
    
//     let seleccion;
//     let productoSeleccionado;
//     while (true) {
//         seleccion = prompt(mensaje);
//         let seleccionNumero = parseInt(seleccion);
        
//         if (seleccionNumero > 0 && seleccionNumero <= listaArticuloLibreria.length) {
//             productoSeleccionado = listaArticuloLibreria[seleccionNumero - 1].nombre;
//             break;
//         } else if (seleccionNumero === listaArticuloLibreria.length + 1) {
//             productoSeleccionado = "Salir";
//             break;
//         } else {
//             alert("Selección no válida. Por favor, intenta de nuevo.");
//         }
//     }
    
//     alert("Has seleccionado: " + productoSeleccionado);
// }



// let nombreUsuario = prompt("Por favor, ingresa tu nombre: ");
// saludarUsuario(nombreUsuario);
// categoriaProducto();
