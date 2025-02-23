// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

const inputNombreAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

const agregarAmigo = () => {
    let nombreAmigo = inputNombreAmigo.value;
    if (nombreAmigo) {
        if (amigos.includes(nombreAmigo)){
            inputNombreAmigo.value='';
            alert('Ya existe un amigo llamado');
            return;
        }
        amigos.push(inputNombreAmigo.value);
        inputNombreAmigo.value = '';
        actualizarListaAmigos();
        return;
    }
    alert('Por favor, inserte un nombre');
}

const actualizarListaAmigos = () => {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
    
    if (resultado.textContent){
        resultado.textContent = '';
    }
}

const sortearAmigo = () => {
  if (amigos.length) {
    const indiceAmigoElegido = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos.splice(indiceAmigoElegido, 1);
    listaAmigos.innerHTML = '';
    actualizarListaAmigos();
    resultado.innerHTML = `El amigo elegido es ${amigoElegido}`;
} else {
    resultado.innerHTML = 'No hay amigos para sortear';
  }
}