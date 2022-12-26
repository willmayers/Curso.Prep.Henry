// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  enMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    return enMayuscula
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 total = numeros.reduce(function (acc, el) {
   return acc + el;
 });
  cb(total);
  }


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(el, i) {
    cb(el)
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  /*primera forma:
  const arrNuevo = array.map(function (el) {
    return  cb(el)
  });
  return arrNuevo*/
  nuevoArr = array.map(cb);
  return nuevoArr;
  /*lo que logro entender, es que, como el map recibe una función para ejecutar
  por cada elemento del arreglo en el que itera, estamos poninedole el cb
  para que se ejecute en cada iteracion y el .map ya lo regresa direcatmente
  en forma de array con el resultado. el cb al necesitar un parametro, 
  está tomando el valor iterante en cada vuelta como su parametro
  como resultado final. la variable que cree es igual a un array nuevo
  con el resultado de haber ejecutado la cb en cada iteracion*/
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(el => {
  return el[0] === "a";
  })

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
