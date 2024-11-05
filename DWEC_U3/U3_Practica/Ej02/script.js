// Creamos la plantilla del objeto
function coche(modelo, color, kms, combustible) {
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
}

// Instanciamos el objeto con varios atributos
var elmio = new coche("Mercedes E330", "negro", 120000, "diésel");
var eltuyo = new coche("BMV 318", "blanco", 210000, "gasolina");

// Mostramos el objeto completo antes de eliminar el atributo
console.log("Antes de borrar el atributo matrícula:", elmio);

// Borramos el atributo "matrícula" usando "delete"
delete elmio.matrícula;

// Comprobamos si el atributo ha sido eliminado
console.log("Después de borrar el atributo matrícula:", elmio);

// Verificamos específicamente si el atributo "matrícula" existe
console.log("¿Existe el atributo 'matrícula'?", 'matrícula' in elmio);
