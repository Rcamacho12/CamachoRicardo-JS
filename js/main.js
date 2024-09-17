

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

const articuloLibreria1 = new ArticuloLibreria("cuaderno tapa blanda", 12950);
const articuloLibreria2 = new ArticuloLibreria("cuaderno ejecutivo", 13400);
const articuloLibreria3 = new ArticuloLibreria("cuaderno Univercitario", 18000);
const articuloLibreria4 = new ArticuloLibreria("cuaderno tapa flexible", 3750);
const articuloLibreria5 = new ArticuloLibreria("cuaderno tapa plastica", 7500);
const articuloLibreria6 = new ArticuloLibreria("cuaderno escolar", 3750);
const articuloLibreria7 = new ArticuloLibreria("cuaderno escolar con lunares", 3750);
const articuloLibreria8 = new ArticuloLibreria("cuaderno ecologico" , 7250);

const listaArticuloLibreria = [articuloLibreria1, articuloLibreria2, articuloLibreria3, articuloLibreria4, 
                                articuloLibreria5, articuloLibreria6, articuloLibreria7, articuloLibreria8];



