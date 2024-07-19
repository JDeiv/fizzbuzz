const palabras = (palabra1: string, palabra2: string) => {
    // split() transforma una cadena en un array separando cada posición, se debe poner comillas en el parentesis
    // reverse() invierte el array luego de que split() lo convierte esdecir [1, 2, 3] => [3, 2, 1]
    // join('') une el array en una cadena separada por espacios, lo que genera "3 2 1"
    // al usar join() se debe poner comillas en el parentesis para que no se imprima con ","
    const palabra1Reversed = palabra1.split('').reverse().join('');
    const palabra2Reversed = palabra2.split("").reverse().join('');
    console.log(palabra1Reversed, palabra2Reversed);

    if (palabra1Reversed.length == palabra2Reversed.length)  {
        console.log(true);
    } else 
    console.log(false);
    
    
}

//palabras("roma", "amor");

// function limpiarCadena(cadena: string): string {
//     return cadena.replace(/\s+/g, '').toLowerCase();
//   }
  
//   function ordenarCadena(cadena: string): string {
//     return cadena.split('').sort().join('');
//   }
  
//   function sonAnagramas(cadena1: string, cadena2: string): boolean {
//     const cadenaLimpia1 = limpiarCadena(cadena1);
//     const cadenaLimpia2 = limpiarCadena(cadena2);
  
//     const cadenaOrdenada1 = ordenarCadena(cadenaLimpia1);
//     const cadenaOrdenada2 = ordenarCadena(cadenaLimpia2);
  
//     return cadenaOrdenada1 === cadenaOrdenada2;
//   }
  
//   // Ejemplo de uso
//   const palabra1 = "Escucha";
//   const palabra2 = "Cuchesa";
  
//   if (sonAnagramas(palabra1, palabra2)) {
//     console.log(`${palabra1} y ${palabra2} son anagramas.`);
//   } else {
//     console.log(`${palabra1} y ${palabra2} no son anagramas.`);
//   }

//AREA DE UN POLIGONO 
function areaPoligono() {
    // Esperar a que el DOM esté totalmente cargado
    document.addEventListener('DOMContentLoaded', (event) => {
        // Seleccionamos el botón de calcular
        const calcularBtn = document.getElementById('calcularBtn') as HTMLButtonElement;

        // Añadimos el evento click al botón
        calcularBtn.addEventListener('click', () => {
            // Seleccionamos el valor del select
            let selectValue = document.getElementById('poli') as HTMLSelectElement;
            let poligono = selectValue.value;

            // Obtenemos los valores de base y altura
            let baseInput = document.getElementById('base') as HTMLInputElement;
            let base = parseFloat(baseInput.value);
            let alturaInput = document.getElementById('altura') as HTMLInputElement;
            let altura = parseFloat(alturaInput.value);

            // Verificar que los valores de base y altura sean números válidos
            if (isNaN(base) || isNaN(altura)) {
                alert("Por favor, ingrese valores numéricos válidos para la base y la altura.");
                return;
            }

            // Calcular el área según el polígono seleccionado
            let area = 0;
            switch (poligono) {
                case 'square':
                    area = base * base;
                    break;
                case 'triangle':
                    area = (base * altura) / 2;
                    break;
                default:
                    console.log("No ha seleccionado polígono");
                    return;
            }

            // Mostrar el resultado
            alert("El resultado es: " + area);
        });
    });
}

//areaPoligono();

//NUMEROS PRIMOS
function numerosPrimos() {
    let numeros = 0; 

    for (let i = 0; i > numeros; i++){
        console.log(i);
    }
}


//NUMEROS PRIMOS
// function numerosPrimos() {
//     let numeros = 0; 

//     for (let i = 0; i > numeros; i++){
//         console.log(i);
//     }
// }


  