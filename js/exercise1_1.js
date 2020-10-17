let myObjet = {
  name: "nameee",
};
//1)Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*********************
let getLenght = (content) =>
  console.log(
    typeof content == typeof "String"
      ? content.length
      : "No es un objeto del tipo String."
  );

getLenght("sdfs");
getLenght(myObjet);
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
let cutString = (content, cut) =>
  console.log(
    typeof content == typeof "string" && !cut.isNan
      ? content.substr(0, cut)
      : "El texto dado no es un objeto del tipo String y/o el número dado no es un objeto tipo número."
  );
cutString(myObjet, 2);
cutString("Esto es un ejemplo", 7);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let getRequiredArray = (content, caracter) =>
  console.log(
    typeof content == typeof "string" &&
      (typeof caracter == typeof 1 || typeof caracter == typeof "string")
      ? content.split(caracter)
      : "El texto dado no es un objeto del tipo String y/o el caracter dado no es válido."
  );
getRequiredArray("Testing el otro ejerc", "es");
getRequiredArray(myObjet, "s");

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
let multipliedCaracter = (content, multiplier) => {
  if (
    typeof content == typeof "string" &&
    !multiplier.isNan &&
    Math.sign(multiplier) == 1
  ) {
    while (0 < multiplier) {
      multiplier--;
      console.log(content);
    }
  } else {
    console.error("Caracteres no válidos.");
  }
};
multipliedCaracter("Ejercicio 3", 3);
//multipliedCaracter(myObjet, "s");

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
let invert = (myWord = "test") => {
  let result = "";
  for (let index = myWord.length; index >= 0; index--) {
    result += myWord.substring(index - 1, index);
  }
  return result;
};
console.log(invert("Esto es un hola mundo"));
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
let countStrings = (myWord = "", search = "") => {
  let count = 0;
  myWord.split(" ").forEach((element) => {
    if (element.includes(search)) {
      count++;
    }
  });
  console.log(count);
};
countStrings("Nelson bueno dice que es bueno.", "bueno");
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

let testInvertString = (myString = "") =>
  console.log(myString.toUpperCase() == invert(myString.toUpperCase()));

testInvertString("Salas");
testInvertString("Salitas");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
let removePatrons = (myString = "", patron = "") => {
  let regularExpression = new RegExp(patron, 'gi');
  console.log(myString.replace(regularExpression, ""));
};
removePatrons("Esto es esto un y esto más esto.", "esto");
