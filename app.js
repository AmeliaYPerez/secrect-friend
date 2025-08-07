//  Array to store friends' names
let listaDeAmigos = [];

function agregarAmigo() {
    // Get input element
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validate it's not empty, if the name is empty return the fuction
    if (nombreAmigo === '') {
        mostrarMensaje('Por favor escribe un nombre');
        return;
    }
    
    // add to array
    listaDeAmigos.push(nombreAmigo);
    
    // Clear input field
    inputAmigo.value = '';
    
    //Display in the list
    actualizarListaAmigos();
    
    // Show confirmation
    mostrarMensaje(`"${nombreAmigo}" añadido correctamente`, 'exito');
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Clear the list before updating it
    listaAmigos.innerHTML = '';
    
    // create and add each list item
    listaDeAmigos.forEach((amigo, index) => {
        const elementoLista = document.createElement('li');
        elementoLista.className = 'name-item';
        elementoLista.innerHTML = `<p>${amigo}</p>`;
        listaAmigos.appendChild(elementoLista);
    });
}

function mostrarMensaje(mensaje, tipo = 'error') {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li class="message-${tipo}">${mensaje}</li>
    `;
    
    // Clear the message after 3 seconds
    // setTimeout(() => {
    //     resultado.innerHTML = '';
    // }, 3000);
}

// Basic drawing function
function sortearAmigo() {

    if (listaDeAmigos.length < 2) {
        mostrarMensaje('Necesitas al menos 2 amigos para sortear');
        return;
    }
    // Validation in case the user wants to play without adding names
    if (listaDeAmigos.length === 0) {
        mostrarMensaje('No hay amigos en la lista', 'error');
        return;
    }
    
    mostrarMensaje('Sorteo en desarrollo...');

    // Generate random index
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length)+1;
    
    // Get random friend
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
    
    // Display result
    mostrarMensaje(`¡El amigo seleccionado es: ${amigoSeleccionado}!`, 'exito');
    
}