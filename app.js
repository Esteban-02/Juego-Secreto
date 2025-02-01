let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;


function verificarIntento(){
    console.log(intentos);
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
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
    console.log(typeof(numeroSecreto));
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
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
}

condicionesIniciales();



