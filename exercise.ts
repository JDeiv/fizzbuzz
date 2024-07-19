const multiplier = (a: number, b: number) => {
  let result = a * b;
  console.log(`The result is: ${result}`);
};

//ANAGRAMA SI FUNCIONA
// function anagramas() {
//     let cadena1 = "Listen";
//     let cadena2 = "Seilent";
//     let cadenaArray = cadena1.toLowerCase().split("");
//     let cadenaArray2 = cadena2.toLowerCase().split("");
//     if (cadenaArray.length !== cadenaArray2.length) {
//         console.log("No son anagramas");
//         return;
//     }

//     let resultado = cadenaArray.every((element) => cadenaArray2.includes(element));
//     if (resultado) {
//         console.log("Son anagramas");
//     } else {
//         console.log("No son anagramas");
//     }

// }
function anagramas() {
  let palabra1 = "Listen";
  let palabra2 = "Silent";

  let arrayPalabra1 = palabra1.toLowerCase().split("").sort().join("");
  let arrayPalabra2 = palabra2.toLowerCase().split("").sort().join("");

  if (arrayPalabra1 === arrayPalabra2) {
    console.log("Son anagramas");
    return;
  } else {
    console.log("No son anagramas");
  }
}
//anagramas();

//operacion(100);

//NUMEROS PRIMOS
function numerosPrimos(num: number): boolean {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    //recorre el numero desde 2 hasta el numero -1 para encontrar divisores
    if (num % i === 0) {
      //si hay divisores aparte del 1 y el mismo numero que de 0 no puede ser numero primo
      return false;
    }
  }

  return true; //si no se ha encontrado divisores, el numero es primo.
}
let numeros = 100; //este es el numero que va como parametro en la funcion numerosPrimos

// for (let i = 1; i <= numeros; i++){//recorre el numero desde la posición 1
//         if (numerosPrimos(i)) {//verifica si el numero de la posición en cada ronda cumple con la condición; si tiene o no divisores
//             console.log(
//                 i + ".", " es un número primo"); //para caso verdadero
//         } else {
//             console.log( i + ".", " no es un número primo");//para caso falso
//         }
// }

/* SUCESION DE FIBONACCI

 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
  let sucesion = [0, 1]; //primeros dos numeros de la sucesion
  let numeroLimite = 50; // numero limite de iteraciones para los primeros 50 numeros de la sucesión

  for (let i = 2; i < numeroLimite; i++) {
    let ultimoNumero = sucesion[sucesion.length - 1];
    let penultimoNumero = sucesion[sucesion.length - 2];
    let siguienteNumero = ultimoNumero + penultimoNumero;
    sucesion.push(siguienteNumero);
  }
  console.log(sucesion);
  //   while (true) {
  //     let ultimoNumero = sucesion[sucesion.length - 1];
  //     let penultimoNumero = sucesion[sucesion.length - 2];
  //     let siguienteNumero = ultimoNumero + penultimoNumero;

  //     if (sucesion.length > 50) break;
  //       sucesion.push(siguienteNumero);

  //       console.log(sucesion.toString());
  //   }
}

//fibonacci();

/* INVIERTIENDO CADENAS DE TEXTO
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const invertirCadena = (cadena: string) => {
  let cadenaInvertida = [""];

  let cadenaArray = cadena.split("");
  console.log("cadena es: ", cadena);

  for (let i = 0; i < cadenaArray.length; i++) {
    cadenaInvertida.unshift(cadenaArray[i]);
  }
  console.log("cadena invertida es: ", cadenaInvertida.join(""));
};

//invertirCadena('David');

/* FACTORIAL DE UN NUMERO
 * Escribe un programa que calcule el factorial de un número
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - El factorial de un número n (n!) es el producto de todos los números enteros desde 1 hasta n.
 *   Por ejemplo, 5! = 5 * 4 * 3 *2 *1
 */

const factorial = (numero: number) => {
  let contador = 1;
  let result = 0;

  for (let i = numero; i >= 1; i--) {
    //console.log("Numeros :", i);
    contador *= i;
  }
  console.log(contador);
};

// factorial(4);

/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const contadorPalabras = () => {
  let oracion =
    "La vaca de mi rancho tiene crias y la vaca es bonita, porque es mi vaca vaca vaca ";
  let palabraArray = oracion.toLowerCase().split(/\W+/); //split con este valor separa la oracion en palabras separadas ignorando caracteres que no sean letras
  let contador: { [key: string]: number } = {}; // este objeto es un index signature, que permite definir tipos de objetos con propiedades de claves dinámicas. Osea sirve para contar cosas que se repiten
  let palabraRepetida = [""]; // nuevo array donde se almacena cada palabra que se recorre en el bucle for para ir contandolas
  let palabra = ""; //varieable para almecenar cada valor por iteración dentro del bucle for

  for (let i = 0; i < palabraArray.length; i++) {
    //bucle para ir recorriendo desde la primera posición hasta la última del array
    palabra = palabraArray[i]; //la variable "palabra" almacena el valor del array en cada posición
    if (!palabraRepetida.includes(palabra)) {
      //condicion si: el nuevo array no incluye la "palabra" que se ha almacenado en cada iteracion del bucle for
      contador[palabra] = 1; //contador se queda en 1 ya que solo hay una palabra
      palabraRepetida.push(palabra); //se agrega esa palabra al nuevo array
    } else {
      contador[palabra]++; //aumenta el contador de la palabra si es repetida
      //si la palabra ya existe en el nuevo array solo se incremente el contador
    }
  }
  console.log(contador);
};

//contadorPalabras();

/*
 * ASPECT RATIO DE UNA IMAGEN
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

/*
 * DECIMAL A BINARIO
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const decimalABinario = (decimal: number) => {
  let octetos = [128, 64, 32, 16, 8, 4, 2, 1]; //declaramos los octetos dentro de un array
  let contador; //declaramso un contador para ir comparando
  for (contador of octetos) {
    //recorremos cada valor del array y nos devuelve sus valores
    if (decimal >= contador) {
      //condicion si decimal(numero qeu ingresamos) es mayor o igual que contador
      console.log(1); //si es mayor o igual a contador, imprime 1
      decimal -= contador; //si es mayor o igual a contador resta decimal - contador y lo almacena en la variable decimal para volver a preguntar en la siguiente iteracion del bucle
    } else {
      console.log(0); //no se cumple la condicón imprime 0 y vuelve a preguntar con la siguiente iteración hasta terminar con todos los valores del array
    }
  }
};

//decimalABinario(104);

/*
 * CODIGO MORSE
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

const alfabeto = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  
}
function codigoMorse(palabra) {
 
  return palabra.toLowerCase()  // Convertimos el texto a minúsculas
  .split("")      // Dividimos el texto en caracteres individuales
  .map((char) => alfabeto[char] || " ")  // Mapeamos cada carácter a su equivalente en morse
    .join(" ");    // Unimos los códigos morse con un espacio entre ellos
 
}
let palabra = codigoMorse('SOS');

console.log(palabra);
// 