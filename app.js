let amigos = [];

// Función para limpiar el input después de agregar un amigo al array.
function limpiarInput() {
    document.getElementById("amigo").value = "";
}

// Función para agregar un amigo a la lista desde el input.
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim(); // trim() elimina los espacios en blanco al inicio y al final del string.
    // Verifica si se agrega un nombre no válido.
    if(nombre !== "") {
        amigos.push(nombre);
        console.log(amigos);
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
    limpiarInput();
}
