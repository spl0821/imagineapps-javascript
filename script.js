const precios = [1045.0,234,456.98,238.98,3455,234,1045.0,234];

let promedio = 0;
let suma = 0;
let max = 0;
// Se refiere a la suma de los numeros menores que 1500
let suma_menores = 0
let moda = 0;
// arreglo de veces que se repite cada número
let moda_array = [];

precios.forEach(precio=>{
  suma += precio;
  if(precio > max){
    max = precio
  }
})

let precios_menores = precios.filter(precio=> precio < 1500);
precios_menores.forEach(precio=>{
  suma_menores += precio;
})

//Hallar la moda
precios.forEach(precio=>{
  moda_array.push(getNumberIterations(precios, precio));
})

moda_array.forEach((number, index)=>{
  if(number > moda){
    moda = precios[index]
  }
})

promedio = suma/precios.length
console.log(suma)
console.log(promedio)
console.log(max)
console.log(precios_menores)
console.log(suma_menores)
console.log(moda)

function getNumberIterations(array, value){
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}