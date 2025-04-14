// 1. Ingresar dos valores y sumarlos.
const a = 5;
const b = 3;
console.log("Suma:", a + b);


// 2. Ingresar tres valores e indicar cual es el mayor y cual el menor.
const x = 12, y = 7, z = 15;
const mayor = Math.max(x, y, z);
const menor = Math.min(x, y, z);
console.log("Mayor:", mayor, "Menor:", menor);


// 3. Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
const palabra = "gato";
console.log(`${palabra} tiene letras.`);


// 4. Ingresar un número e indicar si es par.
const numero = 8;
console.log(numero % 2 === 0 ? "Es par" : "No es par");


// 5. Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
const palabra2 = "Helado";
const n = 3;
console.log(palabra2.repeat(n));


// 6. Ingresar dos valores enteros y enumerar los elementos que los separan.
function enumerarSeparados(a, b) {
  const resultado = [];
  if (a < b) {
    for (let i = a + 1; i < b; i++) resultado.push(i);
  } else {
    for (let i = a - 1; i > b; i--) resultado.push(i);
  }
  console.log("Separados:", resultado.join(", "));
}
enumerarSeparados(20, 26);
enumerarSeparados(1, 11);


// 7. Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
function multiplosDe3(a, b) {
  const resultado = [];
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min + 1; i < max; i++) {
    if (i % 3 === 0) resultado.push(i);
  }
  console.log("Múltiplos de 3:", resultado.join(", "));
}
multiplosDe3(4, 20);


// 8. Mostrar los múltiplos de 2 y 5 menores a 100.
const multiplos = [];
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) multiplos.push(i);
}
console.log("Múltiplos de 2 o 5 menores a 100:", multiplos.join(", "));


// 9. Obtener la suma de los elementos de un array.
const array1 = [3, 6, 9, 12];
const suma = array1.reduce((acc, val) => acc + val, 0);
console.log("Suma total:", suma);


// 10. Sumar solo los elementos pares de un array.
const sumaPares = array1.filter(num => num % 2 === 0).reduce((acc, val) => acc + val, 0);
console.log("Suma de pares:", sumaPares);


// 11. Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal
const palabra3 = "PALA";
const letras = {};
for (let letra of palabra3) {
  letras[letra] = (letras[letra] || 0) + 1;
}
console.log("Repeticiones:", letras);


// 12. Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
const personas = [
    { nombre: "Carla", sexo: "F", edad: 27 },
    { nombre: "Agustín", sexo: "M", edad: 19 },
    { nombre: "Elva", sexo: "F", edad: 22 },
    { nombre: "Francisco", sexo: "M", edad: 31 }
  ];
  
  let sumaEdad = 0;
  let sumaMujeres = 0;
  let cantidadMujeres = 0;
  let mayorMujer = null;
  let menorHombre = null;
  
  for (let persona of personas) {
    sumaEdad += persona.edad;
  
    if (persona.sexo === "F") {
      sumaMujeres += persona.edad;
      cantidadMujeres++;
      if (mayorMujer === null || persona.edad > mayorMujer.edad) {
        mayorMujer = persona;
      }
    }
  
    if (persona.sexo === "M") {
      if (menorHombre === null || persona.edad < menorHombre.edad) {
        menorHombre = persona;
      }
    }
  }
  
  console.log("Promedio de edad:", sumaEdad / personas.length);
  console.log("Mujer más grande:", mayorMujer.nombre);
  console.log("Hombre más joven:", menorHombre.nombre);
  console.log("Promedio edad mujeres:", sumaMujeres / cantidadMujeres)


  // 13. Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.
  function promedioEdad(lista) {
    let suma = 0;
    for (let persona of lista) {
      suma += persona.edad;
    }
    return suma / lista.length;
  }
  
  function mujerMasGrande(lista) {
    let mayor = null;
    for (let persona of lista) {
      if (persona.sexo === "F") {
        if (mayor === null || persona.edad > mayor.edad) {
          mayor = persona;
        }
      }
    }
    return mayor.nombre;
  }
  
  function hombreMasJoven(lista) {
    let menor = null;
    for (let persona of lista) {
      if (persona.sexo === "M") {
        if (menor === null || persona.edad < menor.edad) {
          menor = persona;
        }
      }
    }
    return menor.nombre;
  }
  
  function promedioEdadMujeres(lista) {
    let suma = 0;
    let cantidad = 0;
    for (let persona of lista) {
      if (persona.sexo === "F") {
        suma += persona.edad;
        cantidad++;
      }
    }
    return suma / cantidad;
  }
  
  // Resultados
  console.log("Promedio total:", promedioEdad(personas));
  console.log("Mujer más grande:", mujerMasGrande(personas));
  console.log("Hombre más joven:", hombreMasJoven(personas));
  console.log("Promedio edad mujeres:", promedioEdadMujeres(personas));


  // 14. Filtrar los elementos de un array de números para obtener solo los pares.
     const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

    function obtenerPares(array) {
        const pares = [];
     for (let numero of array) {
     if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
  return pares;
}

console.log("Números pares:", obtenerPares(numeros));


// 15. Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.
function divisoresEntre(minimo, maximo, divisor) {
    const resultado = [];
  
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        resultado.push(i);
      }
    }
  
    return resultado;
  }
  
  // Ejemplos:
  console.log("Divisibles entre 1 y 20 por 3:", divisoresEntre(1, 20, 3));
  console.log("Divisibles entre 10 y 50 por 5:", divisoresEntre(10, 50, 5));