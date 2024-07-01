let numberOfSquares = 6; // creamos la variable numero de cuadrados y le damos inicialmente 6 cuadrados
let colores = generateRandomColors(numberOfSquares); // Genera los colores aleatorios iniciales

let squares = document.querySelectorAll('.square'); // Selecciona todos los cuadrados

let pickedColor = pickColor(); // Elige un color aleatorio como el color objetivo inicial
let colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.textContent = pickedColor; // Muestra el color objetivo en el display

let mensaje = document.querySelector('#message');
let h1 = document.querySelector('h1');

// Función para asignar los colores a los cuadrados
function reset() {
    colores = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    mensaje.textContent = "";
    resetButton.textContent = "Nuevos Colores";
    h1.style.backgroundColor = aleatorio(); // Reiniciamos el color del encabezado con la funcion aleatorio
    for (let i = 0; i < squares.length; i++) {
        if (colores[i]) { // corrobora si colores estavcargado en la posicion i existe
            squares[i].style.display = "block"; //si existe muestra el cuadrado con el color
            squares[i].style.backgroundColor = colores[i]; //
        } else {
            squares[i].style.display = "none"; //aca va a depender de que nivel ejecute, si es el nivel dificil ocultalos otros 3 cuadrados
        }
    }
}

// Función para cambiar el color de todos los cuadrados al color ganador
function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//creamos una funcion pickcolor para que nos de un color aleatorio de nuestro arreglo que vaya del 0 al 6
function pickColor() {
    let colorAleatorio = Math.floor(Math.random() * colores.length);
    return colores[colorAleatorio];
}

function aleatorio() { //nos da un color aleatorio para el h1
    let colorAleatorio = Math.floor(Math.random() * colores.length);
    return colores[colorAleatorio];
}


//creamos una funcion llamada random color que contiene tres variablaes, usamos math flur para que nos redondee un numero enterio dentro de math flur usamos ,math random(que siempre nos dA UN NUMERO ALEATORIO
// DEL 0 A 1) nosotros aca queremos que nos de un numero que va del 0 aal 255
function randomColor() {
    let r = Math.floor(Math.random() * 256); // 0 a 255
    let g = Math.floor(Math.random() * 256); // 0 a 255
    let b = Math.floor(Math.random() * 256); // 0 a 255
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Función para generar un arreglo de colores aleatorios
function generateRandomColors(numerosColores) {
    let nuevosColores = [];
    for (let i = 0; i < numerosColores; i++) {
        nuevosColores.push(randomColor());
    }
    return nuevosColores;
}

// Evento para el botón de reset
let resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", function() {
    reset();
    resetButton.textContent = "Nuevos Colores";
    mensaje.textContent = "";
});

// Botones para cambiar la dificultad 3 0 6 cuadrados
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function() {
    numberOfSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    reset();
});

hardButton.addEventListener("click", function() {
    numberOfSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    reset();
});

// resetea el juego/inicializa
reset();

squares.forEach(square => {
    square.addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            mensaje.textContent = "¡Correcto!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            mensaje.textContent = "Inténtalo nuevamente";
        }
    });
});