// Selección de cinco ejercicios
let seleccion = prompt("Escoge un ejercicio del 1 al 5");

if (seleccion == "1") {
  ejercicio1();
}
if (seleccion == "2") {
  ejercicio2();
}
if (seleccion == "3") {
  ejercicio3();
}
if (seleccion == "4") {
  ejercicio4();
}
if (seleccion == "5") {
  ejercicio5();
}

//Numero de 1 al 100
function ejercicio1() {
  let num = prompt("ingrese un  numero del 1 al 100", "");
  for (i = 0; i <= num; i++) console.log(i);
}

function ejercicio2() {
  let input = prompt("¿De qué color es el caballo blanco de Napoleón?");
  let color = "blanco";
  input.toLowerCase() == color.toLowerCase()
    ? alert("La respuesta es correcta")
    : ejercicio2();
}

function ejercicio3() {
  let m = +prompt("Introduce promedio de notas de Matemáticas");
  let f = +prompt("Introduce promedio de notas de Fisica");
  let c = +prompt("Introduce promedio de notas de Ciencias");
  let promedio = (m + f + c) / 3;
  alert(Math.round(promedio)); // redondeando al entero mas cercano
}

// ejercicio Frutas

function ejercicio4() {
  let cant = [1, 2, 3];
  let frutas = [];
  cant.forEach(() => {
    let fruta = prompt("Ingresa tres nombres de frutas");
    frutas.push(fruta);
  });
  frutas.forEach((f) => {
    // Nombre manzana, eliminarlo
    if (f !== "manzana") {
      console.log(f);
    }
  });
}

function ejercicio5() {
  let nombre = prompt("Cúal es tu nombre?");
  //vocales en array
  let vocales = ["a", "e", "i", "o", "u"];

  let nombre2 = nombre.split("");
  let vocalesNum = 0;
  let consonantes = 0;

  nombre2.forEach((letra) => {
    vocales.includes(letra) ? vocalesNum++ : consonantes++;
  });
  console.log(`Cantidad de vocales = >  ${vocalesNum}`);
  console.log(`Cantidad de consonantes = >  ${consonantes}`);
  alert(`${vocalesNum} - ${consonantes} `); // alert mostrar valores
}
