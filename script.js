// console.log("hola");

/*
let saludo = "";

{

}


// let saludo = "Buenos días";

saludo = 2


const pi = 314;


pi = 628

console.log(pi);

*/

/*

// Funciones

// Declara
function miFuncion() {
  console.log("Hola soy una función");
}

// miFuncion = "Hola!"
/*
const miFuncion = function() {
  console.log("Hola soy una función");
}
*/
/*
// Llama
miFuncion();


// Una función no basta sólo declarandola, SE DEBE INVOCAR O LLAMAR !!!!!!!!!

document.getElementById("hola").addEventListener("click", function() {
//
})

// Dos grandes tipos de funciones:
// Función Anónima! function() {}
// Función Nombrada function Nombre() {}

// Declaración de la función
const sumar = function() {
// Cura del cáncer
}
// Invocación de la función
sumar();

const uno = function() {
// innerHTML += 1 // Concatena
}

*/

//variables

const bloque1 = document.getElementById("bloque1");
const bloque2 = document.getElementById("bloque2");
const bloque3 = document.getElementById("bloque3");
const bloque4 = document.getElementById("bloque4");
const bloque5 = document.getElementById("bloque5");
const bloque6 = document.getElementById("bloque6");
const bloque7 = document.getElementById("bloque7");
const bloque8 = document.getElementById("bloque8");
const bloque9 = document.getElementById("bloque9");
const bloque0 = document.getElementById("bloque0");
let visor = document.getElementsByClassName("visor");
const limpiar = document.getElementById("limpiar");

//eventos

bloque1.addEventListener("click", function () {
  visor[0].textContent += bloque1.textContent;
});

bloque2.addEventListener("click", function () {
  visor[0].textContent += bloque2.textContent;
});

bloque3.addEventListener("click", function () {
  visor[0].textContent += bloque3.textContent;
});

bloque4.addEventListener("click", function () {
  visor[0].textContent += bloque4.textContent;
});

bloque5.addEventListener("click", function () {
  visor[0].textContent += bloque5.textContent;
});

bloque6.addEventListener("click", function () {
  visor[0].textContent += bloque6.textContent;
});

bloque7.addEventListener("click", function () {
  visor[0].textContent += bloque7.textContent;
});

bloque8.addEventListener("click", function () {
  visor[0].textContent += bloque8.textContent;
});

bloque9.addEventListener("click", function () {
  visor[0].textContent += bloque9.textContent;
});

bloque0.addEventListener("click", function () {
  visor[0].textContent += bloque0.textContent;
});
limpiar.addEventListener("click", function() {
  visor[0].textContent = "";
});

let valor1;
let valor2;
let operacion;

const division = document.getElementById("division");
const multiplicacion = document.getElementById("multiplicacion");
const resta = document.getElementById("resta");
const suma = document.getElementById("suma");
const resultado = document.getElementById("resultado");

division.addEventListener("click", function() {
  valor1 = visor[0].textContent;
  operacion = "/";
  visor[0].textContent = "";
})
multiplicacion.addEventListener("click", function() {
  valor1 = visor[0].textContent;
  operacion = "*";
  visor[0].textContent = "";
})
resta.addEventListener("click", function() {
  valor1 = visor[0].textContent;
  operacion = "-";
  visor[0].textContent = "";
})
suma.addEventListener("click", function() {
  valor1 = visor[0].textContent;
  operacion = "+";
  visor[0].textContent = "";
})
resultado.addEventListener("click", function(){
  valor2 = visor[0].textContent;
  total();
})

function total() {
  switch(operacion) {
      case "+":
          visor[0].textContent = +valor1 + +valor2;
      break;

      case "-":
          visor[0].textContent = +valor1 - +valor2;
      break;

      case "*":
          visor[0].textContent = +valor1 * +valor2;
      break;

      case "/":
          visor[0].textContent = +valor1 / +valor2;
      break;    
  }
}