let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;
let juegoTerminado = false;


function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('intentar').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroDeUsuario > numeroSecreto) {
        //suario no acerto
        asignarTextoElemento('p', 'El numero es menor');
        limpiarCaja();
    }else{
        asignarTextoElemento('p', 'El numero es mayor')
        limpiarCaja();
    }
    intentos++;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*10)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Has terminado el juego \nFelicidades!!!');
        juegoTerminado = true;
    }else if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);     
        return numeroGenerado;
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10 para jugar ');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.querySelector('#intentar').removeAttribute('disabled');
    if (juegoTerminado == true) {
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    }
}

condicionesIniciales();



