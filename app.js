let amigos = [];

// Agrega un nombre al array desde el input, haciendo clic en el botón añadir.
function agregarAmigo() {
    let resultado = document.getElementById("resultado");
    if(resultado.innerHTML != "") {
        reiniciarSorteo();
    }

    let nombre = document.getElementById("amigo").value.trim(); // trim() elimina los espacios en blanco al inicio y al final del string.
    // Verifica si se agrega un nombre no válido.
    if(nombre !== "") {
        amigos.push(nombre);               
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
    lista.innerHTML = "";

    let i = 0;
    while(i < amigos.length) {
        let li = document.createElement("li");  // El elemento <li> se crea en memoria.
        li.textContent = amigos[i]
        lista.appendChild(li);  // appendChild() lo inserta en el DOM, haciéndolo visible en la web.
        i++;
    }
}

// Elige, al azar, un nombre del array amigos.
function sortearAmigo() {
    if(amigos == "") {
        alert("Todavía no ingresó nombres.");        
    } else {
        // Genera índice aleatorio.
        let indice = Math.floor(Math.random() * amigos.length);
        // Guarda el nombre según el índice.
        let amigoSecreto = amigos[indice];
        // Muestra el nombre sorteado en el HTML.
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;        

        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";  // Limpia la lista de amigos en el DOM pero no modifica el array.        
    }
}

// Reinicia el sorteo, como si se recargara la página al ingresar un nuevo nombre en el input.
function reiniciarSorteo() {
    // Lipia el array amigos.
    amigos = [];    
    // Limpia la lista de amigos en el DOM.
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Eliminar el mensaje de amigo secreto sorteado.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}
