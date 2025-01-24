let amigos = [];

// Agrega un nombre al array desde el input, haciendo clic en el botón añadir.
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
    actualizarLista();
}

// Limpia el input después de hacer clic en añadir.
function limpiarInput() {
    document.getElementById("amigo").value = "";    
}

// Agrega los nombres como un elemento <li>.
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");    
    lista.innerHTML = "";  // Limpia la lista antes de agregar los nombres para que no se dupliquen constantemente.

    let i = 0;
    while(i < amigos.length) {
        let li = document.createElement("li");  // El elemento <li> se crea en memoria.
        li.textContent = amigos[i]
        lista.appendChild(li);  // appendChild() lo inserta en el DOM, haciéndolo visible en la web.
        i++;
    }
}